<template>
	<div class="CongratsMessage">
		<img src="../assets/success.svg" alt="confete" class="confete" />
		<div class="thanks">Thank you for your order!</div>
		<div class="checkEmail">Check your e-mail inbox for the receipt</div>
		<RouterLink to="/" class="link"
			><div class="continueShopping"><img src="../assets/shopping_cart.svg" alt="carrinho" /> Continue Shopping</div></RouterLink
		>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");
	.CongratsMessage {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		margin-top: 100px;

		.confete {
			max-width: 500px;
		}
		.thanks {
			color: var(--gray-800, #3d3c3c);
			text-align: center;
			font-family: Unica One;
			font-size: 36px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		.checkEmail {
			color: var(--gray-600, #676767);
			text-align: center;
			font-family: Syne;
			font-size: 24px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		.continueShopping {
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 11px 115px;
			border: 2px solid #3d3c3c;
			border-radius: 20px;
			background: #fdbf0f;
			cursor: pointer;

			color: var(--gray-800, #3d3c3c);
			font-family: Syne;
			font-size: 20px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		.link {
			text-decoration: none;
		}
	}
</style>
