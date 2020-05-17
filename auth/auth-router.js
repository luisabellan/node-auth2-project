const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Users = require("../users/users-model")
const restrict = require("../middleware/restrict")

const router = express.Router()

<<<<<<< HEAD
router.post("/register",  async (req, res, next) => {
=======
router.post("/register", async (req, res, next) => {
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
	try {
		const { username } = req.body
		const user = await Users.findBy({ username }).first()

		if (user) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		res.status(201).json(await Users.add(req.body))
	} catch(err) {
		next(err)
	}
})

<<<<<<< HEAD
router.post("/login",  async (req, res, next) => {
	const authError = {
		message: "Invalid Credentials",
=======
router.post("/login", async (req, res, next) => {
	const authError = {
		message: "You shall not pass!",
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
	}

	try {
		const user = await Users.findBy({ username: req.body.username }).first()
		if (!user) {
			return res.status(401).json(authError)
		}

		const passwordValid = await bcrypt.compare(req.body.password, user.password)
		if (!passwordValid) {
			return res.status(401).json(authError)
		}

		const tokenPayload = {
			userId: user.id,
			userRole: "admin", // this would normally come from the database
		}

		// this sends the token back as a cookie instead of in the request body,
		// so the client will automatically save it in its cookie jar.
<<<<<<< HEAD
		res.cookie("token", jwt.sign(tokenPayload, process.env.JWT_SECRET))
=======
		res.cookie("token", jwt.sign(tokenPayload, process.env.JWT_SECRET || "La vida es sueño"))
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd

		res.json({
			message: `Welcome ${user.username}!`,
		})
	} catch(err) {
		next(err)
	}
})

<<<<<<< HEAD

router.get("/logout",  (req, res, next) => {
	// this will delete the session in the database and try to expire the cookie,
	// though it's ultimately up to the client if they delete the cookie or not.
	// but it becomes useless to them once the session is deleted server-side.
	req.session.destroy((err) => {
		if (err) {
			next(err)
		} else {
			res.json({
				message: "Successfully logged out",
			})
		}
	})
})

=======
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
module.exports = router