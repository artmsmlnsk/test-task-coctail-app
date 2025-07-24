<template>
	<div class="image-wrapper">
		<img v-if="src" :src="src" :alt="alt" @error="onError" loading="lazy" />
		<div class="fallback">
			<svg width="100%" height="100%" viewBox="0 0 200 200" fill="none">
				<rect width="200" height="200" rx="16" fill="#e0e0e0" />
				<g>
					<circle cx="100" cy="100" r="60" fill="#bdbdbd" />
					<rect x="60" y="140" width="80" height="20" rx="10" fill="#bdbdbd" />
				</g>
			</svg>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from 'vue';
const props = defineProps<{ src?: string; alt?: string; size?: number }>();
const hasError = ref(false);
const size = props.size ?? 200;

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
.image-wrapper {
	width: 200px;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #fafafa;
	border-radius: 16px;
	overflow: hidden;
}

img {
	object-fit: cover;
	width: 200px;
	height: 200px;
	border-radius: 16px;
}

.fallback {
	width: 200px;
	height: 200px;
}

@media (max-width: vars.$mobile-breakpoint) {
	.image-wrapper,
	img,
	.fallback {
		width: 128px;
		height: 128px;
	}
}
.fallback {
	width: 200px;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
