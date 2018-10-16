const router = require("express").Router()
const passport = require("../auth")
const { db } = require("../../../utils")

//----------------------------------------------------------------------------------------------------------
//Endpoints
//----------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * api/v1/editprofile/edit_profile:
 *   post:
 *     tags:
 *       - name: edit_profile
 *     description: edit_profile
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/edit_profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    edit_profile().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * edit_profile():
 *
 */
edit_profile = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write edit_profile function */
    resolve()

    /* TODO - handle edit_profile error
                        reject({message: "error"})
                    */
  })
}
