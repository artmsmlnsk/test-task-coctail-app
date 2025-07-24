<template>
	<nav class="navigation-list-menu">
		<ul class="navigation-list-menu__list">
			<li
				v-for="item in items"
				:key="item.key || item.label"
				class="navigation-list-menu__item"
			>
				<router-link
					:to="item.to"
					class="navigation-list-menu__link"
					active-class="navigation-list-menu__link--active"
					@click.native="onItemClick(item)"
				>
					<span class="navigation-list-menu__label">{{ item.label }}</span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface MenuItem {
	label: string;
	to: string;
	key?: string | number;
}

const props = defineProps<{ items: MenuItem[] }>();
const emit = defineEmits(['item-click']);

function onItemClick(item: MenuItem) {
	emit('item-click', item);
}
</script>

<style lang="scss">
.navigation-list-menu {
	width: 100%;
	max-width: 300px;
	background: vars.$app-bg-color;
	color: vars.$text-color;
	height: 100%;
	position: relative;
	z-index: 10;

	&__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	&__item {
		margin: 0;
	}

	&__link {
		display: block;
		padding: 1rem 1.5rem;
		color: vars.$text-color;
		text-decoration: none;
		font-size: 1.1rem;
		font-weight: 500;
		transition:
			color 0.3s,
			background 0.3s;

		&:hover {
			background: vars.$underlayer-bg-color;
		}
		&--active {
			color: vars.$app-bg-color;
			background: vars.$text-color;
		}
	}

	&__label {
		display: block;
	}

	@media (max-width: 480px) {
		position: fixed;
		left: 0;
		top: 0;
		width: 100dvw;
		height: 100dvh;
		max-width: none;
		background: vars.$app-bg-color;
		box-shadow: 2px 0 8px rgba(0, 0, 0, 0.04);
		padding-top: 56px;
		.navigation-list-menu__list {
			height: 100%;
			justify-content: flex-start;
		}
	}
}
</style>
