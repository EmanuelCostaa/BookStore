import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
	state: () => ({
		books: {},
		quantidadeNoCarrinho: 0,
		subtotal: 0,
	}),
	actions: {
		setBook(book, qtd, firstAdd = false) {
			if (!this.books[book.id]) {
				this.books = {
					...this.books,
					[book.id]: {
						...book,
						quantidade: qtd,
					},
				};
				this.quantidadeCarrinho();
				return;
			}
			if (this.books[book.id] && !firstAdd) {
				this.books[book.id].quantidade = qtd;
				this.quantidadeCarrinho();
			}
			if (this.books[book.id].quantidade == 0) {
				if (this.books[book.id]) {
					delete this.books[book.id];
					this.quantidadeCarrinho();
					return;
				}
			}
			return;
		},
		quantidadeCarrinho() {
			this.quantidadeNoCarrinho = 0;
			Object.values(this.books).forEach((book) => {
				this.quantidadeNoCarrinho += +book.quantidade;
			});

			let total = 0;
			Object.values(this.books).forEach((book) => {
				total += +book.price * book.quantidade;
			});
			this.subtotal = total.toFixed(2);
		},

		quantidadeById(id) {
			return this.books[id] ? this.books[id].quantidade : 0;
		},
	},
});
