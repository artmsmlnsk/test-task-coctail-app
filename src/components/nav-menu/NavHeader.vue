<template>
	<header class="nav-header" v-if="isMobile">
		<SpaceKeeperButton
			:size="40"
			:visible="true"
			aria-label="Open menu"
			@click="$emit('burger-click')"
		>
			<BurgerIcon />
		</SpaceKeeperButton>
		<span class="nav-header__title">Cocktails</span>
		<SpaceKeeperButton
			:size="40"
			:visible="menuOpen"
			aria-label="Close menu"
			@click="$emit('close-click')"
		>
			<CloseIcon />
		</SpaceKeeperButton>
		<SpaceKeeperButton
			:size="40"
			:visible="!menuOpen"
			aria-label="Close menu placeholder"
		/>
	</header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import BurgerIcon from '../shared/icons/BurgerIcon.vue';
import CloseIcon from '../shared/icons/CloseIcon.vue';
import SpaceKeeperButton from '../shared/buttons/SpaceKeeperButton.vue';

const props = defineProps<{ isMobile: boolean; menuOpen: boolean }>();
</script>

<style lang="scss">
.nav-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 56px;
	min-height: 56px;
	background: vars.$app-bg-color;
	border-bottom: 1px solid vars.$border-color;
	padding: 0 1rem;
	z-index: 1100;
	position: relative;

	&__title {
		font-size: 1.3rem;
		font-weight: 600;
		color: vars.$color;
		flex: 1;
		text-align: center;
	}
}
</style>
