<template>
	<HomeContent />
	<TrendingBooks :treindingBooks="trendingBooks" :loading="loading" />
	<Categories />
	<ViewMore :books="books" @addToCart="addToCart($event)" :loading="loading" />
	<ViewMore :books="books" @addToCart="addToCart($event)" :loading="loading" />
</template>

<script>
	import Categories from "../components/Categories.vue";
	import HomeContent from "../components/HomeContent.vue";
	import TrendingBooks from "../components/TrendingBooks.vue";
	import ViewMore from "../components/ViewMore.vue";
	import { useBookStore } from "../stores/BookStore";
	import { useCartStore } from "../stores/CartStore";
	import { mapState } from "pinia";

	export default {
		components: { HomeContent, TrendingBooks, Categories, ViewMore },
		data() {
			return {
				loading: false,
			};
		},

		computed: {
			...mapState(useBookStore, {
				books: (state) => state.books,
				trendingBooks: (state) => state.trending,
			}),
		},

		methods: {
			addToCart(book) {
				useCartStore().setBook(book, 1, true);
			},
		},

		async mounted() {
			this.loading = true;
			await useBookStore().setBooks();
			useBookStore().setTrending();
			this.loading = false;
		},
	};
</script>
