<template>
	<div class="Categories">
		<div class="title">
			<img src="../assets/folder.svg" alt="pasta" />
			Categories
		</div>

		<div class="cards-area">
			<div class="card" v-for="card in categories">
				<div class="card-name" @click="click(card.name)">{{ card.name }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { useBookStore } from "../stores/BookStore";
	import { mapState } from "pinia";
	export default {
		data() {
			return {
				categories: {},
			};
		},
		methods: {
			click(query) {
				this.$router.push({ name: "search", query: { search: query } });
			},
		},

		async mounted() {
			this.categories = await useBookStore().setCategories();
		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");

	.Categories {
		display: flex;
		flex-direction: column;
		max-width: calc(100vw - 140px);
		margin: 220px 70px;

		.title {
			color: #3d3c3c;
			text-align: left;
			font-family: Unica One;
			font-size: 36px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			margin-bottom: 75px;
		}

		.cards-area {
			display: flex;
			justify-content: space-between;
			row-gap: 20px;
			flex-wrap: wrap;
			gap: 48px;

			.card {
				width: 500px;
				border: solid 2px black;
				justify-content: center;
				border-radius: 10px;
				border: 2px solid #3d3c3c;
				background: #fff;
				box-shadow: 12px 14px #f9784b;
				cursor: pointer;

				text-align: center;
				font-family: Syne;
				font-size: 24px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;

				.card-name {
					padding: 25px 0px;
					color: #3d3c3c;
				}
				.link {
					text-decoration: none;
				}
			}

			.card:hover {
				background: #c5c5c5;
			}
		}
	}
</style>
