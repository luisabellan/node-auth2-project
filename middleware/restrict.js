const jwt = require("jsonwebtoken")

// add role normal here
function restrict(role = 'normal') {
	return async (req, res, next) => {
		const authError = {
			message: "You shall not pass!",
		}

		try {
			// this utilizes the `cookie-parser` middleware to pull the JWT out
			// of the cookies that were automatically sent by the client.
			const token = req.cookies.token
 			if (!token) {
				return res.status(401).json(authError)
			}

			// this checks to make sure the token's signature is valid. if it is,
			// we can trust the data in the payload and consider the user logged in.
			// if it isn't, we know the payload may have been tampered with, and we
			// make the user log in again.
			jwt.verify(token, process.env.JWT_SECRET  || "La vida es sueño", (err, decodedPayload) => {

				// add this to parenthesis after adding a role to each user in the database
				//  normal --> decodePayload.userRole // 'admin' !== role 
				// decodePayload.userRole !== role after user have a role in the database
				
				
				if (err || decodePayload.role  !== role ) {
					return res.status(401).json(authError)
				}

				// we attach the decoded payload values to the request, just in case we
				// need to access them in later middleware functions or route handlers.
				// (to look up the user by ID, for example.)
				req.token = decodedPayload

				next()
			})
		} catch(err) {
			next(err)
		}
	}
}

module.exports = restrict