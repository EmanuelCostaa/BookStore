<template>
	<div class="CartCard">
		<img :src="book.cover" alt="Capa" class="capa" />
		<div class="not-image">
			<div class="top-card">
				<div class="book-info">
					{{ book.title }}
					<p class="autor">{{ book.author }}</p>
				</div>
				<div class="price">${{ book.price }}</div>
			</div>
			<div class="bottom-card">
				<div class="amount">
					<Counter :quantidadeInicial="book.quantidade" @counter="alteraQuantidade($event)" />
				</div>
				<div class="trash"><img src="../assets/trash.svg" alt="trash" class="trash" @click="alteraQuantidade(0)" /></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Counter from "./Counter.vue";

	export default {
		props: {
			book: { type: Object, default: {} },
		},
		components: { Counter },
		emits: ["trash", "counter"],
		data() {
			return {};
		},
		methods: {
			alteraQuantidade(quantidade) {
				let objeto = {
					book: this.book,
					quantidade: quantidade,
				};
				this.$emit("counter", objeto);
			},
		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");

	.CartCard {
		display: flex;
		margin: 0px 33px 12px 37px;
		padding: 26px 25px 23px 24px;
		border-radius: 20px;
		border: 3px dashed #3d3c3c;
		gap: 10px;

		.capa {
			width: 30%;
		}

		.not-image {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			box-sizing: border-box;
			width: 100%;
			.top-card {
				padding: 20px 23px 0px 0px;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				font-family: Syne;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
				box-sizing: border-box;

				.book-info {
					margin-top: 10px;
					color: var(--gray-600, #676767);
					font-size: 24px;
					box-sizing: border-box;

					.autor {
						font-size: 16px;
						align-self: flex-start;
					}
				}
				.price {
					color: var(--orange-500, #f9784b);
					text-align: right;
					font-size: 32px;
					box-sizing: border-box;
				}
			}

			.bottom-card {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;
			}
			.trash {
				cursor: pointer;
			}
		}
	}
</style>
