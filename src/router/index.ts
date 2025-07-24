import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from 'vue-router';
import { COCKTAIL_CODES, type TCocktailCode } from '../constants/cocktails';
import { useCocktailsStore } from '../stores/useCocktailsStore';

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

router.beforeEach(async (to, from, next) => {
	if (to.name && COCKTAIL_CODES.includes(to.name as TCocktailCode)) {
		try {
			const cocktailsStore = useCocktailsStore();
			cocktailsStore.fetchCocktail(to.name as TCocktailCode);
		} catch (error) {}
	}

	next();
});

export default router;
