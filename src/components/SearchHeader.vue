<template>
	<div class="SearchHeader">
		<Search :initialSearch="search" @search="search = $event" />
		<div class="bottom">
			<div class="results">
				Results "<span class="blue-text">{{ search }}</span
				>"
			</div>

			<div class="selects">
				<Select :options="categories" @selected="this.$emit('selected', $event)" />
				<Select orderBy :options="orderByOptions" @selected="this.$emit('orderBy', $event)" />
			</div>
		</div>
	</div>
</template>

<script>
	import Search from "./Search.vue";
	import Select from "./Select.vue";

	export default {
		components: { Select, Search },
		data() {
			return {
				orderByOptions: {
					0: { name: "First Added" },
					1: { name: "Last Added" },
				},
			};
		},
		emits: ["selected"],
		props: {
			search: { type: String, default: "" },
			categories: { type: Object, default: {} },
		},
	};
</script>

<style scoped>
	.SearchHeader {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 60px;
		max-width: calc(100vw - 140px);
		margin: 300px 70px 0px 70px;
		color: #000;
		font-family: Unica One;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		padding-bottom: 60px;

		border-bottom: 2px dashed #676767;

		.bottom {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.selects {
				display: flex;
				align-items: flex-end;
				gap: 20px;
			}
		}

		.blue-text {
			color: #3ab8eb;
		}
	}
</style>
