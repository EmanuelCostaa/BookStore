<template>
	<div class="Book">
		<RouterLink :to="'/productDetails/' + book.id" class="link">
			<img :src="book.cover" alt="Capa" class="capa" />
			<div class="title">{{ book.title }}</div>
		</RouterLink>
		<div class="buttons" v-if="withPrice">
			<div class="preco">${{ book.price }}</div>
			<div class="cart" @click="this.$emit('addToCart', book)"><img src="../assets/shopping_cart.svg" alt="" /></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			withPrice: { type: Boolean, default: false },
			book: { type: Object, default: {} },
		},
		emits: ["addToCart"],
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");

	.Book {
		display: flex;
		flex-wrap: wrap;
		width: 200px;
		.capa {
			cursor: pointer;
		}
		.title {
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;

			color: var(--gray-800, #3d3c3c);
			font-family: Syne;
			font-size: 20px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
		.buttons {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;
			gap: 10px;

			.preco {
				padding: 9px 0px;
				border-radius: 20px;
				border: 2px solid var(--gray-800, #3d3c3c);
				width: 100%;
				color: var(--gray-800, #3d3c3c);
				text-align: center;
				font-family: Syne;
				font-size: 24px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
			}
			.cart {
				padding: 10px 0px;
				display: flex;
				justify-content: center;
				width: 100%;
				border-radius: 20px;
				border: 2px solid var(--gray-800, #3d3c3c);
				background: var(--yellow-500, #fdbf0f);
				cursor: pointer;
			}
			.cart:hover {
				background: #e4ac11;
			}
		}
		.link {
			text-decoration: none;
		}
	}
</style>
