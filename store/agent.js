import axios from 'axios'

const handleError = err => {
	console.log(err)
	// 401: logout
	// Other: show info about broken app
}

const requests = {
	get: url =>
		axios.get(url).catch(handleError),
	post: (url, body) =>
		axios.post(url, body).catch(handleError),
	del: url =>
		axios.post(url).catch(handleError)
}

const Auth = {
	register: (username, email, password, rePassword) =>
		requests.post('/users', { username, email, password, rePassword })
}

export default {
	Auth
}
