const router = require("express").Router()
const Fci_adminController = require('../controllers/Fci_admin.controller')
const auth = require('../middleware/auth')
const upload = require('../middleware/fileUpload')

router.post('/login', Fci_adminController.loginUser)
router.get('/profile', auth('Fci_admin'), Fci_adminController.profile)

router.post('/logout', auth('Fci_admin'), Fci_adminController.logOut)
router.post('/logoutAll', auth('Fci_admin'), Fci_adminController.logOutAll)

router.post('/addNews',upload.array('files'), Fci_adminController.addNews)
router.get('/showNews',auth('Fci_admin'), Fci_adminController.showNews)
router.get('/showSingleNews/:id', auth('Fci_admin'), Fci_adminController.showSingleNews)

module.exports = router