const router = require("express").Router()
const passport = require("../auth")
const { db } = require("../../../utils")

//----------------------------------------------------------------------------------------------------------
//Endpoints
//----------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * api/v1/followers/follow:
 *   post:
 *     tags:
 *       - name: follow
 *     description: follow
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/follow",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    follow().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * api/v1/followers/follow:
 *   post:
 *     tags:
 *       - name: follow
 *     description: follow
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/follow",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    follow().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * api/v1/followers/follow:
 *   post:
 *     tags:
 *       - name: follow
 *     description: follow
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/follow",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    follow().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * api/v1/followers/follow:
 *   post:
 *     tags:
 *       - name: follow
 *     description: follow
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/follow",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    follow().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * api/v1/followers/follow:
 *   post:
 *     tags:
 *       - name: follow
 *     description: follow
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/follow",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    follow().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * follow():
 *
 */
follow = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write follow function */
    resolve()

    /* TODO - handle follow error
                        reject({message: "error"})
                    */
  })
}

/**
 * @swagger
 * follow():
 *
 */
follow = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write follow function */
    resolve()

    /* TODO - handle follow error
                        reject({message: "error"})
                    */
  })
}

/**
 * @swagger
 * follow():
 *
 */
follow = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write follow function */
    resolve()

    /* TODO - handle follow error
                        reject({message: "error"})
                    */
  })
}

/**
 * @swagger
 * follow():
 *
 */
follow = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write follow function */
    resolve()

    /* TODO - handle follow error
                        reject({message: "error"})
                    */
  })
}

/**
 * @swagger
 * follow():
 *
 */
follow = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write follow function */
    resolve()

    /* TODO - handle follow error
                        reject({message: "error"})
                    */
  })
}
