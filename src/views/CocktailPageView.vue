<template>
	<div class="cocktail-page-view">
		<div class="cocktail-content" v-if="cocktails?.length">
			<CocktailCard
				v-for="(cocktail, idx) in cocktails"
				:key="cocktail.id || idx"
				:cocktail="cocktail"
			/>
		</div>
		<div v-else-if="loading">Loading...</div>
		<div v-else-if="error">{{ error }}</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCocktailsStore } from '../stores/useCocktailsStore';
import CocktailCard from '../components/cocktail-card/CocktailCard.vue';

const route = useRoute();
const store = useCocktailsStore();
const currentCocktailCode = computed(() => route.name as any);

onMounted(() => {
	store.fetchCocktail(currentCocktailCode.value);
});

const cocktailState = computed(
	() => store.cocktailStates[currentCocktailCode.value]
);
const cocktails = computed(() => cocktailState.value?.data ?? []);
const loading = computed(() => cocktailState.value?.loading);
const error = computed(() => cocktailState.value?.error);
</script>

<style scoped>
.cocktail-page-view {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}
.cocktail-content {
	flex: 1;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}
</style>
