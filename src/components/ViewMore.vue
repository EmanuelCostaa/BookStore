<template>
	<div class="ViewMore">
		<div class="title" v-if="!noTitle"><img src="../assets/path.svg" alt="caminho" /> {{ title }}</div>
		<div class="slider">
			<div class="slider-content">
				<div class="loading" v-if="loading">Carregando...</div>
				<div class="nothingFoound" v-if="books.length === 0">Nothing found :(</div>
				<div class="book" v-for="book in books" v-else>
					<Book withPrice :book="book" @addToCart="this.$emit('addToCart', $event)" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Book from "./Book.vue";

	export default {
		props: {
			title: { type: String, default: "View more" },
			noTitle: { type: Boolean, default: false },
			search: { type: String, default: "" },
			books: { type: Object, default: {} },
			loading: { type: Boolean, default: false },
		},
		components: { Book },
		emits: ["addToCart"],

		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	@import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");

	.ViewMore {
		display: flex;
		flex-direction: column;
		max-width: calc(100vw - 140px);
		margin: 0px 70px 220px 70px;

		.title {
			justify-self: flex-start;
			color: var(--gray-800, #3d3c3c);
			font-family: Unica One;
			font-size: 36px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
		.nothingFoound {
			color: #3d3c3c;
			font-family: Unica One;
			text-align: center;
			font-size: 64px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			width: 100%;
		}
		.loading {
			color: #3d3c3c;
			font-family: Unica One;
			text-align: center;
			font-size: 64px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			width: 100%;
		}

		.slider {
			display: flex;
			border-radius: 20px;
			gap: 30px;
			justify-content: center;
			width: 100%;
			.slider-content {
				box-sizing: border-box;
				padding: 90px 10px;
				display: flex;
				border-radius: 20px;
				gap: 30px;
				width: 100%;
				margin-bottom: 20px;
				margin-left: 60px;
				margin-right: 60px;
				overflow-x: auto;
			}
		}

		.slider-content::-webkit-scrollbar {
			height: 10px;
			width: 40px; /* Largura da barra de rolagem */
		}

		/* Polegar (a parte que você arrasta) */
		.slider-content::-webkit-scrollbar-thumb {
			background-color: #888;
			border-radius: 20px;
		}
		.slider-content::-webkit-scrollbar-track {
			height: 400px;
		}
	}
</style>
