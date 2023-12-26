<template>
	<div class="Search">
		<input class="input" ref="search" type="text" autocomplete="off" autofill="off" :placeholder="placeholder" v-model="search" @keyup.enter="enter" @blur="this.$emit('input', search)" />
		<img src="../assets/search.svg" alt="lupinha" class="lupa" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				placeholder: "Type the name of book or author...",
				search: "",
			};
		},
		props: {
			initialSearch: { type: String, default: "" },
		},
		methods: {
			enter() {
				this.search ? this.$router.push({ name: "search", query: { search: this.search } }) : this.$router.push({ name: "search" });
			},
		},
		emits: ["input"],
		async mounted() {
			if (this.initialSearch) {
				this.search = this.initialSearch;
			}
		},
	};
</script>

<style scoped>
	.Search {
		width: 530px;
		border-radius: 20px;
		display: flex;
		justify-content: space-between;
		padding: 12px 20px;
		border-radius: 20px;
		border: 2px solid #3d3c3c;
		background: #fff;
		box-shadow: 5px 10px 1px #fdbf0f;
		.input {
			width: 100%;
			border: none;
			outline: none;
			background-color: transparent;
			color: var(--gray-800, #3d3c3c);
			font-family: Syne;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}
</style>
