const Router = require("express");
const postFormData = require('../controllers/servers.js')
const router = Router();

router.post('/contact', postFormData);

module.exports = router;
