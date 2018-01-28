<template lang="html">
	<form @submit.prevent="onSubmit">

		<!-- user name -->
		<label for="user-name-input">
			{{ $t('registration.USER_NAME') }}:
		</label>
		<input
			id="user-name-input"
			type="text"
			v-model="name"
			:placeholder="this.$t('registration.USER_NAME')"
			required
		>
		<!-- e/o user name -->

		<br>

		<!-- e-mail -->
		<label for="email-input">
			{{ $t('registration.YOUR_EMAIL') }}:
		</label>
		<input
			id="email-input"
			type="email"
			v-model="email"
			:placeholder="this.$t('registration.EMAIL')"
			required
		>
		<!-- e/o e-mail -->

		<br>

		<!-- password -->
		<label for="email-input">
			{{ $t('registration.PASSWORD') }}:
		</label>
		<input
			id="password-input"
			type="password"
			v-model="password"
			:placeholder="this.$t('registration.PASSWORD')"
			required
		>
		<!-- e/o password -->

		<br>

		<!-- repeated password -->
		<label for="repeated-password-input">
			{{ $t('registration.REPEATED_PASSWORD') }}:
		</label>
		<input
			id="repeated-password-input"
			type="password"
			v-model="repeatedPassword"
			:placeholder="this.$t('registration.REPEATED_PASSWORD')"
			required
		>
		<!-- repeated password -->

		<br>

		<!-- terms -->
		<label for="terms-checkbox">
			{{ $t('registration.I_ACCEPT_THE_TERMS')}}
		</label>
		<input id="terms-checkbox" type="checkbox" required>
		<!-- e/o terms -->

		<br>

		<button>{{ $t('registration.REGISTER') }}</button>

	</form>
</template>

<script>
export default {
	data () {
		return {
			name: '',
			email: '',
			password: '',
			repeatedPassword: ''
		}
	},
	methods: {
		onSubmit () {
			const { name, email, password, repeatedPassword } = this
			this.$emit('submit', { name, email, password, repeatedPassword })
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
