<template>
	<header class="nav-header" v-if="isMobile">
		<button
			class="nav-header__burger"
			@click="$emit('burger-click')"
			aria-label="Open menu"
		>
			<BurgerIcon />
		</button>
		<span class="nav-header__title">Cocktails</span>
		<button
			v-if="menuOpen"
			class="nav-header__close"
			@click="$emit('close-click')"
			aria-label="Close menu"
		>
			<CloseIcon />
		</button>
	</header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import BurgerIcon from './BurgerIcon.vue';
import CloseIcon from './CloseIcon.vue';

const props = defineProps<{ isMobile: boolean; menuOpen: boolean }>();
</script>

<style lang="scss">
.nav-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 56px;
	background: vars.$app-bg-color;
	border-bottom: 1px solid vars.$underlayer-bg-color;
	padding: 0 1rem;
	z-index: 1100;
	position: relative;

	&__burger,
	&__close {
		background: none;
		border: none;
		padding: 0.5rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__title {
		font-size: 1.3rem;
		font-weight: 600;
		color: vars.$text-color;
		flex: 1;
		text-align: center;
	}
}
</style>
