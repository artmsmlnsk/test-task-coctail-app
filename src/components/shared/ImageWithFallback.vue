<template>
	<div class="image-with-fallback" :style="{ '--image-size': `${size}px` }">
		<img
			v-if="src && !hasError"
			:src="src"
			:alt="alt"
			@error="onError"
			loading="lazy"
			class="image-with-fallback__image"
		/>
		<div v-else class="image-with-fallback__placeholder">
			<PlaceholderIcon :size="size" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import PlaceholderIcon from './icons/PlaceholderIcon.vue';

interface Props {
	src?: string;
	alt?: string;
	size?: number;
}

const props = withDefaults(defineProps<Props>(), {
	size: 200,
});

const hasError = ref(false);

function onError() {
	hasError.value = true;
}

watch(
	() => props.src,
	() => {
		hasError.value = false;
	}
);
</script>

<style scoped lang="scss">
.image-with-fallback {
	width: var(--image-size);
	height: var(--image-size);
	display: flex;
	align-items: center;
	justify-content: center;
	background: vars.$app-bg-color;
	border-radius: 16px;
	overflow: hidden;

	&__image {
		object-fit: cover;
		width: var(--image-size);
		height: var(--image-size);
		border-radius: 16px;
	}

	&__placeholder {
		width: var(--image-size);
		height: var(--image-size);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: vars.$mobile-breakpoint) {
		&,
		&__image,
		&__placeholder {
			width: calc(var(--image-size) * 0.64);
			height: calc(var(--image-size) * 0.64);
		}
	}
}
</style>
