const express = require("express")
const Users = require("./users-model")

const router = express.Router()

// This endpoint is only available to logged-in admin users due to the `restrict` middleware
router.get("/", async (req, res, next) => {
	try {
		res.status(200).json(await Users.find())
		//res.status(200).json(await Users.find().where({department:req.body.department })) 
	} catch(err) {
		next(err)
	}
})
// This endpoint is only available to logged-in admin users due to the `restrict` middleware
router.get("/:id", async (req, res, next) => {
	try {
		res.json(await Users.findById(req.params.id))
	} catch(err) {
		next(err)
	}
})

 //logout
router.get("/logout", (req, res, next) => {
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
   // This handles the route `PUT /users/:id`
  router.put("/:id",   (req, res) => {
	Users.update(req.params.id, req.body)
	  .then((user) => {
		res.status(200).json(user);
	  })
	  .catch((error) => {
		next(error);
	  });
  });
 

   // This handles the route `DELETE /users/:id`
  router.delete("/:id", (req, res) => {
	Users.deleteUser(req.params.id)
	  .then((count) => {
		res.status(200).json({
		  message: "The user has been nuked",
		});
	  })
	  .catch((error) => {
		next(error);
	  });
	}); 

module.exports = router