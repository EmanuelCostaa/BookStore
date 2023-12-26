<template>
	<BookDetails :book="book" :quatidadeNoCarrinho="quantidadeDesseLivro" @addToCart="addALotToCart($event)" />
	<ViewMore :loading="loading" :books="relacionados" @addToCart="addToCart($event)" />
</template>

<script>
	import BookDetails from "../components/BookDetails.vue";
	import ViewMore from "../components/ViewMore.vue";
	import { useBookStore } from "../stores/BookStore";
	import { useCartStore } from "../stores/CartStore";
	import { mapState } from "pinia";

	export default {
		components: { ViewMore, BookDetails },
		data() {
			return {
				book: {},
				loading: false,
				relacionados: {},
				quantidadeDesseLivro: 0,
			};
		},
		computed: {
			...mapState(useBookStore, {
				books: (state) => state.books,
			}),
		},

		methods: {
			addToCart(book) {
				useCartStore().setBook(book, 1, true);
			},
			addALotToCart(qtd) {
				useCartStore().setBook(this.book, qtd);
				this.quantidadeDesseLivro = qtd;
			},
			criaArrayCategorias() {
				let arrayCaegorias = [];
				this.book.categories.forEach((i) => arrayCaegorias.push(i.category.name));
				return arrayCaegorias;
			},
		},
		watch: {
			async "$route.params.bookId"() {
				this.loading = true;
				await useBookStore().setBooks();
				this.book = useBookStore().setBookAtual(this.$route.params.bookId);
				this.quantidadeDesseLivro = useCartStore().quantidadeById(this.$route.params.bookId);
				this.relacionados = await useBookStore().booksByCategory(this.criaArrayCategorias());
				this.relacionados = this.relacionados.filter((book) => book.id !== this.book.id); // Os ivros relacionados que irão aparecer serão os que tiverem categorias em comum, esse filter é para evitar de aparecer o mesmo livro
				if (this.relacionados.length == 0) {
					this.relacionados = Object.values(this.books).filter((book) => book.id !== this.book.id); // Caso só exista esse livro com essa(s) categoria(s), aparecereão todos os livros menos o atual
				}
				this.loading = false;
			},
		},

		async mounted() {
			this.loading = true;
			await useBookStore().setBooks();
			this.book = useBookStore().setBookAtual(this.$route.params.bookId);
			this.quantidadeDesseLivro = useCartStore().quantidadeById(this.$route.params.bookId);
			this.relacionados = await useBookStore().booksByCategory(this.criaArrayCategorias());
			this.relacionados = this.relacionados.filter((book) => book.id !== this.book.id); // Os ivros relacionados que irão aparecer serão os que tiverem categorias em comum, esse filter é para evitar de aparecer o mesmo livro
			if (this.relacionados.length == 0) {
				this.relacionados = Object.values(this.books).filter((book) => book.id !== this.book.id); // Caso só exista esse livro com essa(s) categoria(s), aparecereão todos os livros menos o atual
			}
			this.loading = false;
		},
	};
</script>
