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
router.post('/addArchaeologyNews', auth('general'), upload.array('files'),generalController.addArchaeologyNews)
router.post('/addAlsunNews', auth('general'), upload.array('files'),generalController.addAlsunNews)
router.post('/addMedicineNews', auth('general'), upload.array('files'),generalController.addMedicineNews)

router.get('/showFciNews',generalController.showFciNews)
router.get('/showFciSingleNews/:id', generalController.showFciSingleNews)

router.get('/showFineArtNews',generalController.showFineArtNews)
router.get('/showFineArtSingleNews/:id', generalController.showFineArtSingleNews)

router.get('/showToursimNews',generalController.showToursimNews)
router.get('/showToursimSingleNews/:id', generalController.showToursimSingleNews)

router.get('/showArchaeologyNews',generalController.showArchaeologyNews)
router.get('/showArchaeologySingleNews/:id', generalController.showArchaeologySingleNews)

router.get('/showAlsunNews',generalController.showAlsunNews)
router.get('/showAlsunSingleNews/:id', generalController.showAlsunSingleNews)

router.get('/showMedicineNews',generalController.showMedicineNews)
router.get('/showMedicineSingleNews/:id', generalController.showMedicineSingleNews)



router.post('/showSingleNews', auth('general'), generalController.showSingleNew)

router.patch('/editNew', auth('general'), generalController.updateNew)

router.post('/logout', auth('general'), generalController.logOut)
module.exports = router