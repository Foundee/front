<template lang="html">
	<form @submit.prevent="onSubmit">

		<!-- user name -->
		<label for="user-name-input">
			{{ $t('registration.USER_NAME') }}:
		</label>
		<input
			id="user-name-input"
			type="text"
			v-model="username"
			@input="onUsernameInput"
			:placeholder="this.$t('registration.USER_NAME')"
			required
		>
		<span v-if="!isUsernameAvailable">
			{{ username }} {{ $t('registration.IS_NOT_AVAILABLE')}}
		</span>
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
			@input="onEmailInput"
			:placeholder="this.$t('registration.EMAIL')"
			required
		>
		<span v-if="!isEmailAvailable">
			{{ email }} {{ $t('registration.IS_NOT_AVAILABLE')}}
		</span>
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
import debounce from 'lodash.debounce'
import agent from '@/store/agent'

export default {
	data () {
		return {
			username: '',
			email: '',
			password: '',
			repeatedPassword: '',
			isUsernameAvailable: true,
			isEmailAvailable: true
		}
	},
	methods: {
		onSubmit () {
			const { username, email, password, repeatedPassword } = this
			this.$emit('submit', { username, email, password, repeatedPassword })
		},
		onUsernameInput () {
			this.isUsernameAvailable = true
			this.checkUsernameAvailabilty()
		},
		onEmailInput () {
			this.isEmailAvailable = true
			this.checkEmailAvailabilty()
		},
		checkUsernameAvailabilty: debounce(async function () {
			if (this.username.length === 0) return
			const { available } = await agent.Auth.usernameAvailabilty(this.username)
			this.isUsernameAvailable = available
		}, 500),
		checkEmailAvailabilty: debounce(async function () {
			if (this.email.length === 0) return
			const { available } = await agent.Auth.emailAvailabilty(this.email)
			this.isEmailAvailable = available
		}, 500)
	}
}
</script>

<style lang="scss" scoped>
</style>
