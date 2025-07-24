import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from 'vue-router';
import { COCKTAIL_CODES } from '../constants/cocktails';

const cocktailRoutes: RouteRecordRaw[] = COCKTAIL_CODES.map(cocktailCode => ({
	path: `/${cocktailCode}`,
	name: cocktailCode,
	component: () => import('../views/CocktailPageView.vue'),
}));

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: `/${COCKTAIL_CODES[0]}`,
	},
	...cocktailRoutes,
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
