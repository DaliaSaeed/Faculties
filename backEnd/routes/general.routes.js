const router = require('express').Router()
const generalController = require('../controllers/general.controller')
const auth = require('../middleware/auth')
const upload = require('../middleware/fileUpload')

router.post('/login', generalController.loginUser)
router.get('/profile', auth('general'), generalController.profile)

//router.post('/addNews', auth('general'), upload.array('files'),generalController.addNews)
router.post('/addFciNews', auth('general'), upload.array('files'),generalController.addFciNews)
router.post('/addFineArtNews', auth('general'), upload.array('files'),generalController.addFineArtNews)
router.post('/addToursimNews', auth('general'), upload.array('files'),generalController.addToursimNews)

router.get('/showFciNews',generalController.showFciNews)
router.get('/showFineArtNews',generalController.showFineArtNews)
router.get('/showToursimNews',generalController.showToursimNews)

router.post('/showSingleNews', auth('general'), generalController.showSingleNew)

router.patch('/editNew', auth('general'), generalController.updateNew)

router.post('/logout', auth('general'), generalController.logOut)
module.exports = router