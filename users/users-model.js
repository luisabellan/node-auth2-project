const bcrypt = require("bcryptjs")
const db = require("../database/config")

async function add(user) {
	// hash the password with a time complexity of 14
	user.password = await bcrypt.hash(user.password, 14)

	const [id] = await db("users").insert(user)
	return findById(id)
}

function find() {
	return db("users").select("id", "username", "password", "department")
}

function findBy(filter) {
	return db("users")
		.select("id", "username", "password", "department")
		.where(filter)
}

function findById(id) {
	return db("users")
		.select("id", "username", "password","department")
		.where({ id })
		.first()
}



function update(id, changes) {
	return db('users')
		.where({ id })
		.update(changes);
}

function deleteUser(id) {
	return db('users')
		.where('id', id)
		.del();
}

module.exports = {
	add,
	find,
	findBy,
	findById,
	deleteUser,
	update
}