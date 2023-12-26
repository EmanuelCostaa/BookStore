<template>
	<RouterLink to="/search" class="link">
		<div class="ExploreButton">
			Explore
			<img src="../assets/binoculars.svg" alt="binóculo" />
		</div>
	</RouterLink>
</template>

<script>
	export default {};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");

	.ExploreButton {
		max-width: 90px;
		max-height: 51px;
		display: flex;
		justify-content: space-between;
		background: #fdbf0f;
		color: var(--gray-800, #3d3c3c);
		border: 2px solid #3d3c3c;
		border-radius: 10px;
		padding: 16px 27px;
		cursor: pointer;
		font-family: Syne;
	}
	.link {
		text-decoration: none;
	}
</style>
