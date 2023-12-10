const { Router } = require('express');
const {login, register} = require("../controller/auth.contoller");

const router = Router();
router.post("/register", register)
router.post("/login", login)
module.exports = {
    Authrouters: router
}