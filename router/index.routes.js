const { Router } = require('express');
const {Authrouters} = require('./auth.routes');
const { ProfileRoutes } = require('./profile.routes');
const { checkAuth } = require('../middleware/check-auth');

const router = Router();
router.use("/auth", Authrouters);
router.use("/user", checkAuth, ProfileRoutes);
module.exports = {
    Allrouters: router
}