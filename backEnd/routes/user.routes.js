const router = require("express").Router()
const userController = require('../controllers/user.controller')
const auth = require('../middleware/auth')
const upload = require('../middleware/fileUpload')

router.post('/logout', auth('user'), userController.logOut)
router.post('/logoutAll', auth('user'), userController.logOutAll)

router.get('/showNews',  userController.showNews)
router.get('/showSingleNews/:id', auth('user'), userController.showSingleNews)

module.exports = router