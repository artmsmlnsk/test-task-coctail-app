import { describe, it, expect } from 'vitest';
import { toFeCocktailType, IBECocktail, ICocktail } from './ICocktail';

describe('toFeCocktailType', () => {
	it('should convert IBECocktail to ICocktail correctly', () => {
		const beCocktail: IBECocktail = {
			idDrink: '123',
			strDrink: 'Mojito',
			strCategory: 'Cocktail',
			strAlcoholic: 'Alcoholic',
			strInstructions: 'Mix ingredients.',
			strDrinkThumb: 'https://image.url',
			strGlass: '',
			strIngredient1: 'Rum',
			strMeasure1: '50ml',
			strIngredient2: 'Mint',
			strMeasure2: '10 leaves',
			strIngredient3: 'Sugar',
			strMeasure3: '2 tsp',
			strIngredient4: undefined,
			strMeasure4: undefined,
			// ...other fields can be undefined
		};
		const expected: ICocktail = {
			id: '123',
			drinkName: 'Mojito',
			category: 'Cocktail',
			alcoholic: 'Alcoholic',
			instructions: 'Mix ingredients.',
			pictureUrl: 'https://image.url',
			ingredients: [
				['Rum', '50ml'],
				['Mint', '10 leaves'],
				['Sugar', '2 tsp'],
			],
		};
		expect(toFeCocktailType(beCocktail)).toEqual(expected);
	});

	it('should handle missing measures and ingredients', () => {
		const beCocktail: IBECocktail = {
			idDrink: '456',
			strDrink: 'Gin Tonic',
			strCategory: 'Cocktail',
			strAlcoholic: 'Alcoholic',
			strInstructions: 'Pour and mix.',
			strDrinkThumb: '',
			strGlass: '',
			strIngredient1: 'Gin',
			strMeasure1: undefined,
			strIngredient2: 'Tonic',
			strMeasure2: undefined,
			strIngredient3: undefined,
			strMeasure3: undefined,
			// ...other fields can be undefined
		};
		const expected: ICocktail = {
			id: '456',
			drinkName: 'Gin Tonic',
			category: 'Cocktail',
			alcoholic: 'Alcoholic',
			instructions: 'Pour and mix.',
			pictureUrl: '',
			ingredients: [
				['Gin', ''],
				['Tonic', ''],
			],
		};
		expect(toFeCocktailType(beCocktail)).toEqual(expected);
	});
});
