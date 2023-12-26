<template>
	<div :class="{ Select: true, orderBy: orderBy }">
		<div class="clear" @click="selected = ''">Clear</div>
		<select :class="{ selected: selected }" v-model="selected">
			<option disabled value="">{{ orderBy ? "Order by" : "Categories" }}</option>
			<option v-for="option in options" :key="option.name" class="options">{{ option.name }}</option>
		</select>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: "",
			};
		},
		emits: ["selected"],
		props: {
			options: { type: Object, default: {} },
			orderBy: { type: Boolean, default: false },
			preSelected: { type: String, default: "" },
		},

		watch: {
			selected(value) {
				this.$emit("selected", value);
			},
		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");
	.orderBy {
		width: 175px !important;
	}
	.Select {
		display: flex;
		align-items: center;
		gap: 10px;

		width: 350px;
		height: 50px;
		select {
			width: 100%;
			height: 100%;
			font-size: 16px;
			border: 1px solid #ccc;
			border-radius: 4px;
			cursor: pointer;

			color: var(--gray-800, #3d3c3c);
			font-family: Syne;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;

			box-shadow: 5px 10px 1px #f9784b;
			border-radius: 20px;
			border: 2px solid var(--gray-800, #3d3c3c);
		}
		.clear {
			cursor: pointer;
		}
	}
</style>
