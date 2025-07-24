<template>
	<div>
		{{ currentCocktailCode }}
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const currentCocktailCode = computed<string>(() => {
	return route.name as string;
});
</script>
