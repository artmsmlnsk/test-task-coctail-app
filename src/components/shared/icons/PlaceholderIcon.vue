<template>
	<svg
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>glass-cocktail</title>
		<path
			d="M7.5,7L5.5,5H18.5L16.5,7M11,13V19H6V21H18V19H13V13L21,5V3H3V5L11,13Z"
		/>
	</svg>
</template>

<script setup lang="ts">
defineProps<{
	size: number;
}>();
</script>
