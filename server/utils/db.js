/* Removal static URL when deploying. Use ONLY env vars */
module.exports = require("mongo-utility")(process.env.MONGO_URL || "mongodb://testuser:pl@yt1m3@ds043987.mlab.com:43987/fusioncodevideodemo")
