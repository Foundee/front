<template lang="html">
	<div>
		<h1 class="site-title">
			{{ $t('registration.REGISTER_NEW_USER') }}
		</h1>
		<div class="">

			<!-- info from back-end -->
			<h2>Dołącz do Społeczności!</h2>
			<p>To forum to miejsce, gdzie każdy może popracować zarówno nad rzeczywistymi umiejętnościami jak i sposobem wypowiadania się. Pracuj. Codziennie. Choć trochę. Ale regularnie. Takie podejście przełoży się na Twój sukces zawodowy. Nawiązuj ciekawe kontakty zawodowe i ćwicz umiejętności interpersonalne. Chodzi też o moment dyskusji, świeże spojrzenie, twórczą iskrę i interakcję z drugim człowiekiem, który podąża zupełnie innymi ścieżkami rozumowania niż Ty.</p>

			<p>Rejestrując się potwierdzasz, że akceptujesz nasz Regulamin i zapoznałeś się z FAQ. Jest to ważne, abyśmy razem mogli zadbać o porządek i dobre zasady na forum.</p>
			<!-- info from back-end -->

			<hr>

		</div>
	</div>
</template>

<script>
export default {
	head () {
		return {
			title: `${ this.$t('registration.REGISTRATION') } - ${ this.$store.state.common.appName }`
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
