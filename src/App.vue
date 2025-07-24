<template>
	<div class="app-layout">
		<NavigationMenu />
		<main>
			<router-view />
		</main>
	</div>
</template>

<script setup lang="ts">
import NavigationMenu from './components/nav-menu/NavigationMenu.vue';
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

@media (max-width: 480px) {
	.app-layout {
		flex-direction: column;
	}
}
</style>
