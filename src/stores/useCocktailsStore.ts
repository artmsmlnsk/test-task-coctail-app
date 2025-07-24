import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { getCocktail } from '../requests/getCocktails';
import { type TCocktailCode } from '../constants/cocktails';
import { ICocktail } from '../types/ICocktail';

interface CocktailState {
	loading: boolean;
	data: ICocktail[] | null;
	error: string | null;
}

export const useCocktailsStore = defineStore('cocktails', () => {
	const cocktailStates = reactive<Record<TCocktailCode, CocktailState | null>>({
		margarita: null,
		mojito: null,
		a1: null,
		kir: null,
	});

	async function fetchCocktail(cocktailCode: TCocktailCode) {
		if (cocktailStates[cocktailCode] && !cocktailStates[cocktailCode].error) {
			return Promise.resolve(cocktailStates[cocktailCode]);
		}

		cocktailStates[cocktailCode] = {
			loading: true,
			data: null,
			error: null,
		};

		try {
			const cocktailData = await getCocktail(cocktailCode);
			cocktailStates[cocktailCode].data = cocktailData;
		} catch (error) {
			cocktailStates[cocktailCode].data = null;
			cocktailStates[cocktailCode].error = error;
		} finally {
			cocktailStates[cocktailCode].loading = false;
		}
	}

	return {
		cocktailStates,
		fetchCocktail,
	};
});
