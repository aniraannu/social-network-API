const router = require('express').Router();
// import all API routes from /api/index.js
const apiRoutes = require("./api");
//Use the /api prefix for all API routes
router.use("/api", apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
  });
//Export routes
  module.exports = router;