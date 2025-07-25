export interface ICocktail {
	id: string;
	drinkName: string;
	category: string;
	alcoholic: string;
	instructions: string;
	ingredients: Array<[string, string]>; // [название, сколько]
	pictureUrl?: string;
}

export interface IBECocktail {
	// разделил фронтовый и бековый тип потому что апишка сторонняя, может закончиться вдруг, или могут появиться конкуренты, которые дешевле, и нужно будет отвязываться от этого интерфейса. Ну и вообще, где не bff по опыту проще разделить, чтобы не париться в будущем.
	idDrink: string;
	strDrink: string;
	strDrinkAlternate?: string;
	strTags?: string;
	strVideo?: string;
	strCategory: string;
	strIBA?: string;
	strAlcoholic: string;
	strGlass: string;
	strInstructions: string;
	strInstructionsES?: string;
	strInstructionsDE?: string;
	strInstructionsFR?: string;
	strInstructionsIT?: string;
	strDrinkThumb: string;
	strIngredient1?: string;
	strIngredient2?: string;
	strIngredient3?: string;
	strIngredient4?: string;
	strIngredient5?: string;
	strIngredient6?: string;
	strIngredient7?: string;
	strIngredient8?: string;
	strIngredient9?: string;
	strIngredient10?: string;
	strIngredient11?: string;
	strIngredient12?: string;
	strIngredient13?: string;
	strIngredient14?: string;
	strIngredient15?: string;
	strMeasure1?: string;
	strMeasure2?: string;
	strMeasure3?: string;
	strMeasure4?: string;
	strMeasure5?: string;
	strMeasure6?: string;
	strMeasure7?: string;
	strMeasure8?: string;
	strMeasure9?: string;
	strMeasure10?: string;
	strMeasure11?: string;
	strMeasure12?: string;
	strMeasure13?: string;
	strMeasure14?: string;
	strMeasure15?: string;
	strImageSource?: string;
	strImageAttribution?: string;
	strCreativeCommonsConfirmed?: string;
	dateModified?: string;
}

export function toFeCocktailType(beCocktail: IBECocktail): ICocktail {
	const feCocktail: ICocktail = {
		id: beCocktail.idDrink,
		drinkName: beCocktail.strDrink,
		category: beCocktail.strCategory,
		alcoholic: beCocktail.strAlcoholic,
		instructions: beCocktail.strInstructions,
		pictureUrl: beCocktail.strDrinkThumb,
		ingredients: [],
	};

	let i = 1;
	while (true) {
		const ingredient = beCocktail[`strIngredient${i}`];
		const measure = beCocktail[`strMeasure${i}`];

		if (ingredient) {
			feCocktail.ingredients.push([
				ingredient as string,
				(measure as string) || '',
			]);
			i++;
		} else {
			break;
		}
	}

	return feCocktail;
}
