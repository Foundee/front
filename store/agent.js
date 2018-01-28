import axios from 'axios'

const handleError = err => {
	console.log(err)
	// 401: logout
	// Other: show info about broken app
}

const getData = res => res && res.data

const requests = {
	get: url =>
		axios.get(url).catch(handleError).then(getData),
	post: (url, body) =>
		axios.post(url, body).catch(handleError).then(getData),
	del: url =>
		axios.post(url).catch(handleError).then(getData)
}

const Auth = {
	register: (username, email, password, rePassword) =>
		requests.post('/users', { username, email, password, rePassword }),
	usernameAvailabilty: username =>
		// requests.post('/checkUsernameAvailabilty', { username }), // mock api
		new Promise(resolve => {
			setTimeout(() => resolve({ available: false }), 1200)
		}),
	emailAvailabilty: email =>
		// requests.post('/checkEmailAvailabilty', { email }) // mock api
		new Promise(resolve => {
			setTimeout(() => resolve({ available: false }), 140)
		})
}

export default {
	Auth
}
