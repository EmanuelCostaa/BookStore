<template>
	<div class="Counter">
		<img src="../assets/minus.svg" alt="minus" :class="{ buttons: true, block: counter < 1 }" @click="minus" />
		<input type="text" name="counter" v-model="counter" class="number" oninput="this.value = this.value.replace(/[^0-9]/g, '')" @keyup.enter="enter" />
		<img src="../assets/plus.svg" alt="plus" :class="{ buttons: true, block: counter > 98 }" @click="plus" />
	</div>
</template>

<script>
	export default {
		props: {
			quantidadeInicial: { type: Number, Default: 0 },
		},
		emits: ["counter", "minusOne", "plusOne"],

		data() {
			return {
				counter: 0,
			};
		},
		methods: {
			minus() {
				this.counter--;
				this.$emit("counter", this.counter);
			},
			plus() {
				this.counter++;

				this.$emit("counter", this.counter);
			},
			enter() {
				if (this.counter > 99) {
					this.counter = 99;
				}
				if (this.counter < 0) {
					this.counter = 0;
				}

				this.$emit("counter", this.counter);
			},
		},
		watch: {
			quantidadeInicial(value) {
				this.counter = value;
			},
		},
		mounted() {
			this.counter = this.quantidadeInicial;
		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");

	.Counter {
		display: flex;
		align-items: center;
		gap: 8px;

		.number {
			padding: 3px 20px;
			border-radius: 10px;
			border: 3px solid #3d3c3c;
			width: 30px;

			color: var(--gray-800, #3d3c3c);
			text-align: center;
			font-family: Syne;
			font-size: 20px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		.buttons {
			width: 20px;
			cursor: pointer;
		}
		.block {
			border-radius: 100%;
			background-color: rgba(44, 44, 44, 0.199);
			pointer-events: none;
			cursor: not-allowed !important ;
		}
	}
</style>
