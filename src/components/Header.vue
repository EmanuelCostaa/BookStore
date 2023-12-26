<template>
	<div class="closeCart" @click="cartOpen = false" v-if="cartOpen"></div>
	<div class="cart">
		<Cart v-if="cartOpen" @close-cart="cartOpen = false" />
	</div>
	<div class="header_content" v-if="!cartOpen">
		<RouterLink to="/">
			<img alt="Book Store logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
		</RouterLink>
		<div class="right_corner">
			<div class="carrinho">
				<img alt="Shopping Cart" class="shopping_cart" src="@/assets/shopping_cart.svg" @click="cartOpen = true" />
				<div class="item-count" v-if="quantidadeCarrinho">{{ quantidadeCarrinho }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Cart from "./Cart.vue";
	import { useCartStore } from "../stores/CartStore";
	import { mapState } from "pinia";

	export default {
		emtis: ["shoppingCart"],
		components: { Cart },
		data() {
			return {
				cartOpen: false,
			};
		},
		computed: {
			...mapState(useCartStore, {
				quantidadeCarrinho: (state) => state.quantidadeNoCarrinho,
			}),
		},
	};
</script>

<style lang="scss" scoped>
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");

	.header_content {
		top: 0;
		height: 120px;
		position: fixed;
		width: 100vw;
		z-index: 10;
		display: flex;
		padding: 0px 75px;
		justify-content: space-between;
		align-items: center;
		background-color: rgb(236, 236, 236);
		box-sizing: border-box;
		.logo {
			width: 124px;
			height: 24px;
			gap: 12px;
			flex-shrink: 0;
			cursor: pointer;
		}
		.right_corner {
			margin-top: 40px;
			display: flex;
			justify-content: space-between;
			gap: 25px;
			.shopping_cart {
				width: 26.712px;
				height: 24.75px;
				flex-shrink: 0;
				cursor: pointer;
				position: relative;
			}
			.item-count {
				width: 32px;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				top: -10px;
				right: -10px;
				background-color: #fdbf0f;
				color: white;
				border-radius: 20px;
				color: var(--gray-800, #3d3c3c);
				font-family: Syne;
				font-size: 24px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
			}
		}
	}
	.closeCart {
		position: fixed;
		width: 100%;
		height: 100%;
	}
	.cart {
		width: 600px;
		position: fixed;
		padding: 0px;
		right: 0;
		top: 0px;
	}
</style>
