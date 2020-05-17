const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const authRouter = require("./auth/auth-router")
const usersRouter = require("./users/users-router")
const server = express()
const port = process.env.PORT || 5000

const restrict = require("./middleware/restrict")

server.use(cors({
	credentials: true,
	origin: "http://localhost:3000",
}))
server.use(helmet())
server.use(cookieParser())
server.use(express.json())

server.use("/api", authRouter)
// restrict("admin"),
server.use("/api/users",    usersRouter)

server.get("/", (req, res, next) => {
	res.status(200).json({
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
