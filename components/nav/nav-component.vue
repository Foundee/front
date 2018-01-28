<template lang="html">
  <nav class="nav">
		<nuxt-link to="/" class="nav__item">Foundee</nuxt-link>
  	<nuxt-link to="/registration" class="nav__item">Register</nuxt-link>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
	.nav {
		height: 60px;
		border-bottom: 1px solid #ccc;

		display: flex;
		justify-content: center;
		align-items: center;

		&__item {
			padding: 5px;
		}
	}
</style>
