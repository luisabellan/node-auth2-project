const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const authRouter = require("./auth/auth-router")
const usersRouter = require("./users/users-router")

const server = express()
const port = process.env.PORT || 5000

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(cookieParser())

<<<<<<< HEAD
server.use("/api/", authRouter)
=======
server.use("/api", authRouter)
>>>>>>> ccdafec87a22e47606d9e960c0d2fa7742aea5fd
server.use("/api/users", usersRouter)

server.get("/", (req, res, next) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
