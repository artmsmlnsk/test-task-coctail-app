<template>
	<div class="app-layout">
		<NavigationMenu />
		<main>
			<router-view />
		</main>
	</div>
</template>

<script setup lang="ts">
import NavigationMenu from './components/NavigationMenu.vue';
</script>

<style lang="scss">
.app-layout {
	flex-grow: 1;
	flex-shrink: 0;
	display: flex;
	height: 100vh;
	width: 100%;
	max-width: vars.$max-app-width;
	min-width: vars.$min-app-width;
}
</style>
