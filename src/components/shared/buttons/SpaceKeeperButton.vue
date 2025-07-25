<template>
	<button
		v-if="visible"
		class="space-keeper-button"
		:style="buttonStyle"
		@click="$emit('click')"
	>
		<slot />
	</button>
	<div
		v-else
		class="space-keeper-button space-keeper-button--placeholder"
		:style="buttonStyle"
	></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
	size?: number;
	visible?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	size: 40,
	visible: true,
});

const buttonStyle = computed(() => ({
	width: `${props.size}px`,
	height: `${props.size}px`,
	minWidth: `${props.size}px`,
	minHeight: `${props.size}px`,
}));

defineEmits<{
	(e: 'click'): void;
}>();
</script>

<style lang="scss">
.space-keeper-button {
	background: none;
	border: none;
	padding: 8px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 auto;
	color: vars.$color;

	&--placeholder {
		cursor: default;
	}
}
</style>
