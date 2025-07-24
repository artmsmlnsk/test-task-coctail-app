<template>
	<div class="not-found">
		<h1>404 - Page Not Found</h1>
		<router-link to="/">Return to Homepage</router-link>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.not-found {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 60vh;
	text-align: center;

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	a {
		color: #42b983;
		text-decoration: underline;
		font-size: 1.2rem;
	}
}
</style>
