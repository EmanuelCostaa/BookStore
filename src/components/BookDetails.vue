<template>
	<div class="BookDetails">
		<div class="loading" v-if="loading">Carregando...</div>
		<img :src="book.cover" alt="Capa" class="capa" v-if="!loading" />
		<div class="details" v-if="!loading">
			<div class="row-1">
				{{ book.title }}
			</div>
			<div class="row-2">Author(a): {{ book.author }}</div>
			<div class="row-3">
				{{ book.description }}
			</div>
			<div class="row-4">${{ book.price }} <Counter :quantidadeInicial="quantidadeInicial" @counter="quantidadeParaCarrinho = $event" /></div>
			<div class="row-5">
				<div :class="{ cart: true, cartDisabled: quantidadeParaCarrinho == 0 }" @click="this.$emit('addToCart', quantidadeParaCarrinho)">
					<img src="../assets/shopping_cart.svg" alt="carrinho" />
				</div>
				<RouterLink to="/congrats" class="link"><div class="buy-now">Buy Now</div></RouterLink>
			</div>
		</div>
	</div>
</template>

<script>
	import Counter from "./Counter.vue";

	export default {
		components: { Counter },
		props: {
			book: { type: Object, default: {} },
			quatidadeNoCarrinho: { type: Number, default: 0 },
		},
		data() {
			return {
				quantidadeParaCarrinho: 0,
				quantidadeInicial: 0,
			};
		},
		emits: ["addToCart"],

		watch: {
			quatidadeNoCarrinho(value) {
				this.quantidadeParaCarrinho = value;
				this.quantidadeInicial = value;
			},
		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");

	.BookDetails {
		display: flex;
		max-width: calc(100vw - 600px);
		margin: 300px 300px 220px 300px;
		width: 100%;
		gap: 150px;

		.capa {
			width: 400px;
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

		.details {
			display: flex;
			flex-direction: column;
			width: 100%;
			gap: 21px;

			.row-1 {
				display: flex;
				justify-content: space-between;

				color: var(--gray-800, #3d3c3c);
				font-family: Unica One;
				font-size: 40px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;

				.favorite {
					padding: 2px 20px;
					border: 3px solid #3d3c3c;
					border-radius: 25px;
					cursor: pointer;
				}
			}

			.row-2 {
				display: flex;
				padding: 24px 26px;
				border-radius: 25px;
				border: 2px dashed var(--gray-800, #3d3c3c);
				box-shadow: 9px 7px 1px #676767;

				color: var(--gray-600, #676767);
				font-family: Syne;
				font-size: 16px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
			}
			.row-3 {
				display: flex;
				padding: 24px 26px;
				border-radius: 25px;
				border: 2px dashed var(--gray-800, #3d3c3c);
				box-shadow: 9px 7px 1px #676767;

				color: var(--gray-600, #676767);
				font-family: Syne;
				font-size: 14px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
			}
			.row-4 {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 40px;

				color: var(--orange-500, #f9784b);
				font-family: Syne;
				font-size: 36px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
			}

			.row-5 {
				display: flex;
				justify-content: space-evenly;

				.cart {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 11px 115px;
					border: 2px solid #3d3c3c;
					border-radius: 25px;
					background: #fdbf0f;
					cursor: pointer;
					width: 10%;
				}
				.cart:hover {
					background: #e4ac11;
				}
				.cartDisabled {
					background: #ac820e;
					pointer-events: none;
					cursor: not-allowed;
				}

				.buy-now {
					display: flex;
					align-items: center;
					padding: 11px 115px;
					border: 2px solid #3d3c3c;
					border-radius: 25px;
					background: #f9784b;
					cursor: pointer;

					color: var(--gray-800, #3d3c3c);
					font-family: Syne;
					font-size: 20px;
					font-style: normal;
					font-weight: 400;
					line-height: normal;
				}
				.buy-now:hover {
					background: #dd683d;
				}
			}
		}
		.link {
			text-decoration: none;
		}
	}
</style>
