const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Users = require("../users/users-model")
const secrets = require('../config/secrets')

const router = express.Router()

router.post("/register",  async (req, res, next) => {
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

router.post('/login', (req, res, next) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user); // new line
 
        // the server needs to return the token to the client
        // this doesn't happen automatically like it happens with cookies
        res.status(200).json({
          message: `Welcome ${user.username}!, have a token...`,
          token, // attach the token as part of the response
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id, // sub in payload is what the token is about
    username: user.username,
    department: user.department,
    role: user.role,
    // ...otherData
  };

  const options = {
    expiresIn: '1d', // show other available options in the library's documentation
  };


	
  return jwt.sign(payload, process.env.JWT_SECRET || 'La vida es sueño', options); // this method is synchronous
}

router.get("/logout",  (req, res, next) => {
	// this will delete the session in the database and try to expire the cookie,
	// though it's ultimately up to the client if they delete the cookie or not.
	// but it becomes useless to them once the session is deleted server-side.



/*	You cannot manually expire a token after it has been created. Thus, you cannot log out with JWT on the server-side as you do with sessions.

JWT is stateless, meaning that you should store everything you need in the payload and skip performing a DB query on every request. But if you plan to have a strict log out functionality, that cannot wait for the token auto-expiration, even though you have cleaned the token from the client-side, then you might need to neglect the stateless logic and do some queries. so what's a solution?

 Set a reasonable expiration time on tokens

Delete the stored token from client-side upon log out

Query provided token against The Blacklist on every authorized request

Blacklist
“Blacklist” of all the tokens that are valid no more and have not expired yet. You can use a DB that has a TTL option on documents which would be set to the amount of time left until the token is expired.

Redis
Redis is a good option for blacklist, which will allow fast in-memory access to the list. Then, in the middleware of some kind that runs on every authorized request, you should check if the provided token is in The Blacklist. If it is you should throw an unauthorized error. And if it is not, let it go and the JWT verification will handle it and identify if it is expired or still active.

For more information, see How to log out when using JWT. by Arpy Vanyan

	/* I using sessions and cookies we could: 
	
	req.session.destroy((err) => {
		if (err) {
			next(err)
		} else {
			res.json({
				message: "Successfully logged out",
			})
		}
	}) */ 
})

module.exports = router