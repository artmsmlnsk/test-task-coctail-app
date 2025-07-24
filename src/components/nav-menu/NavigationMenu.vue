<template>
	<NavHeader
		v-if="isMobile"
		:isMobile="isMobile"
		:menuOpen="menuOpen"
		@burger-click="toggleMenu"
		@close-click="closeMenu"
	/>
	<NavigationList
		v-if="!isMobile || menuOpen"
		:items="menuItems"
		@item-click="handleItemClick"
	/>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import {
	COCKTAIL_CODES,
	COCKTAIL_CODE_TO_NAME_MAP,
} from '../../constants/cocktails';
import NavigationList from './NavigationList.vue';
import NavHeader from './NavHeader.vue';

const menuItems = COCKTAIL_CODES.map(code => ({
	label: COCKTAIL_CODE_TO_NAME_MAP[code],
	to: `/${code}`,
	key: code,
}));

const isMobile = ref(false);
const menuOpen = ref(false);

function checkViewport() {
	isMobile.value = window.innerWidth <= 480;
	if (!isMobile.value) menuOpen.value = false;
}

function toggleMenu() {
	menuOpen.value = !menuOpen.value;
}

function closeMenu() {
	menuOpen.value = false;
}

function handleItemClick() {
	if (isMobile.value) closeMenu();
}

onMounted(() => {
	checkViewport();
	window.addEventListener('resize', checkViewport);
});
onUnmounted(() => {
	window.removeEventListener('resize', checkViewport);
});
</script>

<style lang="scss"></style>
