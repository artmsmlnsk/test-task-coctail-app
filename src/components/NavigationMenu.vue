<template>
	<nav class="navigation-menu">
		<ul class="navigation-list">
			<li
				v-for="cocktailCode in COCKTAIL_CODES"
				:key="cocktailCode"
				class="navigation-item"
			>
				<router-link
					:to="`/${cocktailCode}`"
					class="navigation-link"
					active-class="navigation-link--active"
				>
					<span class="cocktail-name">{{
						COCKTAIL_CODE_TO_NAME_MAP[cocktailCode]
					}}</span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import {
	COCKTAIL_CODES,
	COCKTAIL_CODE_TO_NAME_MAP,
} from '../constants/cocktails';
</script>

<style lang="scss"></style>
