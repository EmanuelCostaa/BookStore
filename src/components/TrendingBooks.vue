<template>
	<div class="TrendingBooks">
		<div class="title">Trending Books</div>
		<div class="subtitle"><img src="../assets/sparkle.svg" alt="brilho" /> Drag to explore</div>
		<div class="slider">
			<div class="slider-content">
				<div class="loading" v-if="loading">Carregando...</div>
				<div class="book" v-for="book in treindingBooks" :key="book.id" v-else>
					<Book :book="book" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Book from "./Book.vue";

	export default {
		components: { Book },
		props: {
			treindingBooks: { type: Object, default: {} },
			loading: { type: Boolean, default: false },
		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");

	.TrendingBooks {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: calc(100vw - 140px);
		margin: 220px 70px;
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

		.title {
			color: #3d3c3c;
			text-align: center;
			font-family: Unica One;
			font-size: 36px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
		.subtitle {
			color: #676767;
			text-align: center;
			font-family: Syne;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			margin-top: 10px;
			margin-bottom: 30px;
		}
		.slider {
			display: flex;
			border-radius: 20px;
			border: 2px dashed #3d3c3c;
			gap: 30px;
			width: 100%;
			max-height: 500px;
			.slider-content {
				box-sizing: border-box;
				padding: 90px 0px;
				display: flex;
				border-radius: 20px;
				gap: 30px;
				width: 100%;
				margin: 0px 60px 20px 60px;
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
