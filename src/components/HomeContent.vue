<template>
	<div class="HomeContent">
		<div class="main-left">
			<div class="big-text grid-col-span-3">What book you</div>
			<div class="big-text grid-col-span-2">looking for?</div>
			<img src="../assets/book.svg" alt="livro" class="book grid-col-span-1" />
			<div class="small-text grid-col-span-2">Explore our catalog and find your next read.</div>
			<Search class="search grid-col-span-3" goToSearchPage />
			<ExploreButton class="grid-col-span-1" />
			<img src="../assets/dashline.svg" alt="linha pontilhada" class="grid-col-span-2" />
		</div>
		<div class="main-right">
			<img src="../assets/library_picture.svg" alt="foto biblioteca" />
		</div>
	</div>
</template>

<script>
	import ExploreButton from "./ExploreButton.vue";
	import Search from "./Search.vue";

	export default { components: { Search, ExploreButton } };
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");

	.HomeContent {
		margin: 300px 70px 0px 70px;
		display: flex;
		justify-content: space-between;
		max-width: calc(100vw - 140px);
		align-items: center;
		flex-wrap: wrap;

		.main-left {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			align-items: center;

			.grid-col-span-1 {
				grid-column: span 1;
			}
			.grid-col-span-2 {
				grid-column: span 2;
			}
			.grid-col-span-3 {
				grid-column: span 3;
			}

			.book {
				grid-row: span 2;
				margin-bottom: 10px;
			}
			.search {
				margin-bottom: 30px;
			}
			.big-text {
				font-family: Syne;
				color: #3d3c3c;
				font-size: 64px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
			}
			.small-text {
				color: #676767;
				font-family: Syne;
				font-size: 16px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;
				margin-bottom: 30px;
			}
		}
	}
</style>
