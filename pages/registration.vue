<template lang="html">
	<div>
		<h1 class="site-title">
			{{ $t('registration.REGISTER_NEW_USER') }}
		</h1>

		<!-- if user isn't registered -->
		<div v-if="!isRegistered">
			<!-- info from back-end -->
			<h2>Dołącz do Społeczności!</h2>
			<p>To forum to miejsce, gdzie każdy może popracować zarówno nad rzeczywistymi umiejętnościami jak i sposobem wypowiadania się. Pracuj. Codziennie. Choć trochę. Ale regularnie. Takie podejście przełoży się na Twój sukces zawodowy. Nawiązuj ciekawe kontakty zawodowe i ćwicz umiejętności interpersonalne. Chodzi też o moment dyskusji, świeże spojrzenie, twórczą iskrę i interakcję z drugim człowiekiem, który podąża zupełnie innymi ścieżkami rozumowania niż Ty.</p>
			<p>Rejestrując się potwierdzasz, że akceptujesz nasz Regulamin i zapoznałeś się z FAQ. Jest to ważne, abyśmy razem mogli zadbać o porządek i dobre zasady na forum.</p>
			<!-- info from back-end -->
			<hr>
			<form-component @submit="onSubmit"></form-component>
		</div>

		<!-- if the user has registered -->
		<div v-else>
			<success-component></success-component>
		</div>
	</div>
</template>

<script>
import formComponent from '@/components/registration/form-component.vue'
import successComponent from '@/components/registration/success-component.vue'

export default {
	head () {
		return {
			title: `${ this.$t('registration.REGISTRATION') } - ${ this.$store.state.common.appName }`
		}
	},
	components: {
		formComponent,
		successComponent
	},
	data () {
		return {
			isRegistered: false
		}
	},
	methods: {
		onSubmit (user) {
			console.log(user)
			this.isRegistered = true
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
