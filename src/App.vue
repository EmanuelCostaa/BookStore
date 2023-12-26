<template>
	<Header />
	<div class="view">
		<RouterView />
	</div>
	<Footer v-if="$route.name != 'congrats'" />
</template>

<script scoped>
	import { RouterLink, RouterView } from "vue-router";
	import Header from "./components/Header.vue";
	import Cart from "./components/Cart.vue";
	import Footer from "./components/Footer.vue";
	export default {
		components: { Header, Cart, Footer },
		data() {
			return {};
		},
		methods: {},
	};
</script>

<style>
	body,
	html {
		margin: 0;
	}
</style>
