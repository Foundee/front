<template lang="html">
	<div>
		<nav-component></nav-component>
		<div class="container">
			<main class="main">
				<nuxt/>
			</main>
			<aside-component class="aside"></aside-component>
		</div>
	</div>
</template>
<script>
	import navComponent from '@/components/nav/nav-component'
	import asideComponent from '@/components/aside/aside-component'
	export default {
		components: {
			navComponent,
			asideComponent
		}
	}
</script>
<style lang="scss" scoped>
	.aside, .main {
		border: 1px solid #ccc;
		min-height: 400px;
		margin: 5px;
	}
	.main {
		width: 75%;
	}
	.aside {
		width: 25%;
	}
</style>
