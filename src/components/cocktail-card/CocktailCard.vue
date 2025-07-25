<template>
	<div class="cocktail-card">
		<div class="cocktail-card__header">
			<div class="cocktail-card__info">
				<div class="cocktail-card__image-float">
					<ImageWithFallback
						:src="cocktail.pictureUrl"
						:alt="cocktail.drinkName"
					/>
				</div>
				<h2 class="cocktail-card__drink-name">{{ cocktail.drinkName }}</h2>
				<div class="cocktail-card__drink-meta">
					<div>{{ cocktail.category }}</div>
					<div>{{ cocktail.alcoholic }}</div>
				</div>
				<div class="cocktail-card__instructions">
					<strong>Instructions:</strong>
					<div>{{ cocktail.instructions }}</div>
				</div>
				<div class="cocktail-card__ingredients">
					<table class="cocktail-card__ingredients-table">
						<thead>
							<tr>
								<th colspan="2">List of ingredients</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="([name, measure], idx) in cocktail.ingredients"
								:key="idx"
							>
								<td class="cocktail-card__ingredients-cell">{{ measure }}</td>
								<td class="cocktail-card__ingredients-cell">{{ name }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import ImageWithFallback from '../shared/ImageWithFallback.vue';
import { ICocktail } from '../../types/ICocktail';

const { cocktail } = defineProps<{ cocktail: ICocktail }>();
</script>

<style lang="scss">
.cocktail-card {
	display: flex;
	flex-direction: column;
	padding: 24px;
	background: vars.$app-bg-color;
	width: 100%;
	min-width: 100%;
	margin: 0 auto;
	border-bottom: vars.$border-color solid 1px;

	&__header {
		display: block;
	}
	&__info {
		width: 100%;
	}
	&__image-float {
		float: right;
		margin-left: 24px;
		margin-bottom: 8px;
	}
	&__drink-name {
		font-size: 2rem;
		margin-bottom: 8px;
	}
	&__drink-meta > div {
		font-size: 1rem;
		color: vars.$secondary-color;
	}
	&__instructions {
		margin: 16px 0;
	}
	&__ingredients {
		margin-top: 16px;
		&-table {
			thead {
				th {
					text-align: left;
				}
			}
			width: 100%;
			border-collapse: collapse;
		}
		&-cell {
			padding: 2px;
			font-size: 1rem;
		}
	}
}
</style>
