import axios from 'axios';
import { IBECocktail, ICocktail, toFeCocktailType } from '../types/ICocktail';

interface CocktailApiResponse {
	drinks: IBECocktail[] | null;
}

export const getCocktail = async (
	cocktail_code: string
): Promise<ICocktail[]> => {
	try {
		const response = await axios.get<CocktailApiResponse>(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(cocktail_code)}`
		);

		return (response.data.drinks || []).map(beCocktail =>
			toFeCocktailType(beCocktail)
		);
	} catch (error) {
		console.error('Error fetching cocktail data:', error);
		throw error;
	}
};
