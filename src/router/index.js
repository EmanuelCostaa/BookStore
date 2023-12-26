import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../pages/Home.vue"),
		},

		{
			path: "/productDetails/:bookId",
			name: "productDetails",
			component: () => import("../pages/ProductDetails.vue"),
		},

		{
			path: "/search",
			name: "search",
			component: () => import("../pages/SearchBooks.vue"),
		},

		{
			path: "/congrats",
			name: "congrats",
			component: () => import("../pages/Congrats.vue"),
		},
	],
});

export default router;
