const router = require("express").Router()
const sAdminController = require('../controllers/superAdmin.controller')
const auth = require('../middleware/auth')
const upload = require('../middleware/fileUpload')


router.post("/register",auth('SAdmin'),upload.single('image'),sAdminController.register)

router.post('/login', sAdminController.loginUser)
router.get('/profile', auth('SAdmin'), sAdminController.profile)

router.post('/logout', auth('SAdmin'), sAdminController.logOut)
router.post('/logoutAll', auth('SAdmin'), sAdminController.logOutAll)

router.post('/addNews', auth('SAdmin'), upload.array('files'),sAdminController.addNews)

router.get('/showNews',  auth('SAdmin'),sAdminController.showNews)

router.get('/showSingleNews/:id', auth('SAdmin'), sAdminController.showSingleNews)

router.delete('/deleteSingleNew/:id', auth('SAdmin'), sAdminController.deleteSingleNew)

router.delete('/delAllNews',  sAdminController.delAllNews)

router.get('/AllUsers',auth('SAdmin'), sAdminController.readUsers)

router.delete('/deleteUser/:id', auth('SAdmin'), sAdminController.deleteUser)

router.delete('/deleteAllUser', auth('SAdmin'), sAdminController.delAllUsers)


router.post('/addImage', upload.single('files'), async(req,res)=>{
    try{
        // res.send(req.file)
        image = "uploads/"+ req.file.filename
        // await req.user.save()
        res.send({image:"done"})
    }
    catch(e){
        res.send({e})
    }
})


module.exports = router