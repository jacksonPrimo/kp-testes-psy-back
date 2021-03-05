const app = require('../app')

const auth = app.auth()

module.exports = {
	get(id){
		return auth.getUser(id)
	},
	create(email, password){
		return auth.createUser({email, password})
	}
}
