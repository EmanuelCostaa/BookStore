<template>
	<SearchHeader :search="search" :categories="categories" @selected="filterByCategory = $event" @orderBy="orderBy = $event" />
	<ViewMore noTitle :books="books" @addToCart="addToCart($event)" :loading="loading" />
</template>

<script>
	import SearchHeader from "../components/SearchHeader.vue";
	import ViewMore from "../components/ViewMore.vue";
	import { useBookStore } from "../stores/BookStore";
	import { useCartStore } from "../stores/CartStore";

	export default {
		components: { SearchHeader, ViewMore },

		data() {
			return {
				search: "",
				categories: "",
				books: {},
				booksByName: {},
				filterByCategory: "",
				booksDefault: {},
				orderBy: "",
				loading: false,
			};
		},

		methods: {
			addToCart(book) {
				useCartStore().setBook(book, 1, true);
			},

			compararPorDataCrescente(a, b) {
				let aTime = new Date(a.createdAt).getTime();
				let bTime = new Date(b.createdAt).getTime();
				return aTime - bTime;
			},
			compararPorDataDecrescente(a, b) {
				let aTime = new Date(a.createdAt).getTime();
				let bTime = new Date(b.createdAt).getTime();
				return bTime - aTime;
			},
		},
		watch: {
			"$route.query.search"() {
				this.search = this.$route.query.search;
			},
			orderBy(value) {
				if (value === "First Added") {
					this.books = Object.values(this.books).sort(this.compararPorDataCrescente);
				}
				if (value === "Last Added") {
					this.books = Object.values(this.books).sort(this.compararPorDataDecrescente);
				}
				if (!value) {
					this.books = this.booksByName;
				}
			},
			search(value) {
				this.loading = true;
				this.books = useBookStore().setBooksBySearch(value, this.books);
				this.booksByName = useBookStore().setBooksBySearch(value, this.booksDefault);
				if (this.filterByCategory) {
					this.books = useBookStore().booksByCategory([this.filterByCategory], this.books);
				}
				this.loading = false;
			},
			filterByCategory(value) {
				this.loading = true;
				if (!this.search) {
					this.books = useBookStore().booksByCategory([value], this.booksDefault);
					if (value == "") {
						this.books = this.booksDefault;
					}
				} else {
					this.books = useBookStore().booksByCategory([value], this.booksByName);
				}
				this.loading = false;
			},
		},

		async mounted() {
			this.loading = true;
			await useBookStore().setBooks();
			this.booksDefault = await useBookStore().setBooks();
			this.categories = await useBookStore().setCategories();
			this.search = this.$route.query.search;
			this.loading = false;
		},
	};
</script>
