<template>
	<div class="Cart">
		<div class="voltar">
			<img src="../assets/arrow_left.svg" alt="seta esquerda" class="seta" @click="this.$emit('closeCart')" />
			Your Cart <span class="item-azul"> ({{ quantidadeCarrinho }} {{ quantidadeCarrinho > 1 ? "itens" : "item" }})</span>
		</div>
		<div class="cards" v-if="Object.keys(books).length > 0"><CartCard v-for="card in books" :key="card.id" :book="card" @counter="alteraQuantidade($event)" /></div>
		<div class="emptyCart" v-else>Carrinho vazio :(</div>
		<div class="checkout">
			<div class="subtotal">
				Subtotal:
				<div class="value">${{ subtotal }}</div>
			</div>
			<RouterLink to="/congrats" class="link"><div class="pay">Pay with stripe</div></RouterLink>
		</div>
	</div>
</template>

<script>
	import CartCard from "./CartCard.vue";
	import { useCartStore } from "../stores/CartStore";
	import { mapState } from "pinia";

	export default {
		data() {
			return {};
		},
		emits: ["closeCart"],
		components: { CartCard },
		computed: {
			...mapState(useCartStore, {
				books: (state) => state.books,
				subtotal: (state) => state.subtotal,
				quantidadeCarrinho: (state) => state.quantidadeNoCarrinho,
			}),
		},
		methods: {
			alteraQuantidade(book) {
				useCartStore().setBook(book.book, book.quantidade);
			},
		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");

	.Cart {
		display: flex;
		flex-direction: column;
		position: fixed;
		background-color: white;
		width: 600px;
		height: 100vh;
		box-shadow: 0px 0px 0px 5000px var(--gray-600, #67676757);
		z-index: 20;

		.voltar {
			display: flex;
			padding: 50px 0px 0px 20px;
			align-items: center;
			margin-bottom: 33px;

			color: var(--gray-800, #3d3c3c);
			font-family: Syne;
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			.item-azul {
				margin-left: 5px;
				color: #3ab8eb;
			}
			.seta {
				cursor: pointer;
				margin-right: 12px;
			}
		}
		.emptyCart {
			width: 95%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			color: var(--gray-800, #3d3c3c);
			font-family: Syne;
			font-size: 32px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
		}
		.cards {
			width: 95%;
			height: 100%;
			display: flex;
			flex-direction: column;
			overflow-y: auto;
			gap: 14px;
		}

		.cards::-webkit-scrollbar {
			height: 10px;
			width: 10px; /* Largura da barra de rolagem */
		}

		/* Polegar (a parte que você arrasta) */
		.cards::-webkit-scrollbar-thumb {
			background-color: #888;
			border-radius: 20px;
		}
		.cards::-webkit-scrollbar-track {
			height: 400px;
		}

		.checkout {
			display: flex;
			width: 100%;
			height: 70%;
			flex-direction: column;

			border-radius: 20px 0px 0px 0px;
			border: 4px solid var(--gray-800, #3d3c3c);

			color: var(--gray-800, #3d3c3c);
			font-family: Syne;
			font-size: 32px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;

			.subtotal {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 50%;
				padding: 33px 30px;

				.value {
					padding: 11px 33px;
					background-color: #fdbf0f;
					border: 3px solid #3d3c3c;
					border-radius: 25px;
				}
			}

			.pay {
				display: flex;
				justify-content: center;
				cursor: pointer;
				display: flex;
				align-items: center;
				margin: 30px;
				padding: 11px 33px;
				background-color: #fdbf0f;
				border: 3px solid #3d3c3c;
				border-radius: 25px;
				color: var(--gray-800, #3d3c3c);
			}
		}
		.link {
			text-decoration: none;
		}
	}
</style>
