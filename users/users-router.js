const express = require("express")
const Users = require("./users-model")
const restrict = require("../middleware/restrict")

const router = express.Router()

// This endpoint is only available to logged-in admin users due to the `restrict` middleware
router.get("/",  async (req, res, next) => {
	const authError = {
		message: "You shall not pass!",
		
		if (user) {
			return res.status(409).json({
				message: authError,
			})
		}
	}
	try {
		res.json(await Users.find())
	/* 	console.log(req.params)
		let department = user.body.department
		res.json(await Users.find().where({department})) */
		//res.json(await Users.findByDepartment(req.body.department))

		//res.json(await Users.findBy(req.params.department))
//${req.params.department}
	

	
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
   // This handles the route `PUT /users/:id`
  router.put("/:id",  (req, res) => {
	Users.update(req.params.id, req.body)
	  .then((user) => {
		res.status(200).json(user);
	  })
	  .catch((error) => {
		next(error);
	  });
  });
 

   // This handles the route `DELETE /users/:id`
  router.delete("/:id",  (req, res) => {
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