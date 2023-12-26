import { defineStore } from "pinia";
import api from "../services/api.js";

export const useBookStore = defineStore("BookStore", {
	state: () => ({
		books: {},
		trending: {},
		categories: {},
	}),
	getters: {},

	actions: {
		async setBooks() {
			// Setando os livros que vem da API para o state
			this.books = {};
			let livros = {};
			await api.get("/books").then(({ data }) => {
				data.forEach((book) => {
					let array = [];
					book.categories.forEach((category) => {
						array.push(category.category);
					});
					this.livros = {
						...this.livros,
						[book.id]: {
							...book,
							arrayCategories: array,
						},
					};
				});
			});
			this.books = { ...this.books, ...this.livros };
			return this.books;
		},
		setTrending() {
			// Setando os livros que estão no trendingBooks que vem da API para o state
			this.trending = {};
			this.trending = Object.values(this.books).filter((book) => book.isInTrending);
			this.trending;
		},
		setBookAtual(id) {
			return this.books[id];
		},
		async setCategories() {
			this.categories = {};
			await api.get("/categories").then(({ data }) => {
				data.forEach((category) => {
					this.categories = {
						...this.categories,
						[category.id]: {
							name: category.name,
							id: category.id,
						},
					};
				});
			});
			return this.categories;
		},
		booksByCategory(categories, books) {
			//Retorna os livros filtrados por um array de categorias
			let livros = this.books;
			if (books) {
				livros = books;
			}
			const filteredBooks = Object.values(livros).filter((livro) => {
				return livro.arrayCategories.some((cat) => {
					return categories.some((category) => {
						return cat.name.toLowerCase().includes(category.toLowerCase());
					});
				});
			});
			return filteredBooks;
		},
		booksByTitle(title) {
			let filteredBooks = {};
			title = title.toLowerCase();
			Object.values(this.books).forEach((book) => {
				if (book.title.toLowerCase().includes(title)) {
					filteredBooks[book.id] = book;
				}
			});
			return filteredBooks;
		},
		booksByAuthor(author) {
			let filteredBooks = {};
			author = author.toLowerCase();
			Object.values(this.books).forEach((book) => {
				if (book.author.toLowerCase().includes(author)) {
					filteredBooks[book.id] = book;
				}
			});
			return filteredBooks;
		},
		setBooksBySearch(search, livros) {
			if (!search) {
				return this.books;
			}
			if (search) {
				search = search.toLowerCase();
				if (Object.values(livros).length === 0) {
					if (Object.values(this.categories).some((c) => c.name.toLowerCase().includes(search))) {
						return this.booksByCategory([search]);
					}
					if (Object.values(this.books).some((book) => book.title.toLowerCase().includes(search))) {
						return this.booksByTitle(search);
					}
					if (Object.values(this.books).some((book) => book.author.toLowerCase().includes(search))) {
						return this.booksByAuthor(search);
					}
				} else {
					if (Object.values(this.categories).some((c) => c.name.toLowerCase().includes(search))) {
						return this.booksByCategory([search], livros);
					}
					if (Object.values(this.books).some((book) => book.title.toLowerCase().includes(search))) {
						return this.booksByTitle(search, livros);
					}
					if (Object.values(this.books).some((book) => book.author.toLowerCase().includes(search))) {
						return this.booksByAuthor(search, livros);
					}
				}
			}
		},
	},
});
