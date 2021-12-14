const router = require("express").Router()
const Fci_adminController = require('../controllers/Fci_admin.controller')
const auth = require('../middleware/auth')
const upload = require('../middleware/fileUpload')

router.post('/login', Fci_adminController.loginUser)

router.post('/logout', auth('Fci_admin'), Fci_adminController.logOut)
router.post('/logoutAll', auth('Fci_admin'), Fci_adminController.logOutAll)

router.post('/addNews', auth('Fci_admin'), upload.single('image'), Fci_adminController.addNews)
router.get('/showNews',auth('Fci_admin'), Fci_adminController.showNews)
router.get('/showSingleNews/:id', auth('Fci_admin'), Fci_adminController.showSingleNews)

module.exports = router