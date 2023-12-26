<template>
	<footer class="Footer">
		<div class="text">BookStore Project</div>
		<div class="middle">
			<img alt="linkedIn " class="social_media" src="@/assets/linkedIn.svg" />
			<img alt="gitHub" class="social_media" src="@/assets/gitHub.svg" />
			<a href="https://www.figma.com/file/5qn7BleciUI6roYXS6zlFP/BookStore---Emanuel?node-id=54%3A4923&mode=dev" target="_blank">
				<img alt="figma" class="social_media" src="@/assets/figma.svg" />
			</a>
		</div>
		<div class="text">by Emanuel Costa</div>
	</footer>
</template>

<script>
	import Cart from "./Cart.vue";

	export default {
		emtis: ["shoppingCart"],
		components: { Cart },
		data() {
			return {};
		},
		methods: {},
	};
</script>

<style lang="scss" scoped>
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");

	.Footer {
		display: flex;
		margin: 70px 115px;
		justify-content: space-between;
		align-items: center;
		border-top: 2px dashed #676767;
		bottom: 0px;

		.middle {
			display: flex;
			width: 200px;
			margin-top: 44px;
			justify-content: space-between;

			.social_media {
				width: 53px;
				height: 56px;
				cursor: pointer;
			}
		}
		.text {
			color: var(--gray-600, #676767);
			font-family: Georgia, "Times New Roman", Times, serif;
			font-size: 20px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			margin-top: 53px;
			margin-bottom: 19px;
			font-family: Syne;
		}
	}
</style>
