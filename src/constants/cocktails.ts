export const COCKTAIL_CODES = ['margarita', 'mojito', 'a1', 'kir'] as const;

export type TCocktailCode = (typeof COCKTAIL_CODES)[number];

export type TCocktailCodeToNameMap = {
	[K in TCocktailCode]: string;
};

export const COCKTAIL_CODE_TO_NAME_MAP: TCocktailCodeToNameMap = {
	margarita: 'Margarita',
	mojito: 'Mojito',
	a1: 'A1',
	kir: 'Kir',
};
