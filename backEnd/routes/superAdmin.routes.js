const router = require("express").Router()
const sAdminController = require('../controllers/superAdmin.controller')
const auth = require('../middleware/auth')
const upload = require('../middleware/fileUpload')


router.post("/register",upload.single('image'),sAdminController.register)

router.post('/login', sAdminController.loginUser)

router.post('/logout', auth('SAdmin'), sAdminController.logOut)
router.post('/logoutAll', auth('SAdmin'), sAdminController.logOutAll)

router.post('/addNews',auth('SAdmin'),upload.single('image'),sAdminController.addNews)

router.get('/showNews', auth('SAdmin'), sAdminController.showNews)

router.get('/showSingleNews/:id', auth('SAdmin'), sAdminController.showSingleNews)

router.delete('/deleteSingleNew/:id', auth('SAdmin'), sAdminController.deleteSingleNew)

router.delete('/delAllNews', auth('SAdmin'), sAdminController.delAllNews)

router.get('/AllUsers', sAdminController.readUsers)

router.delete('/deleteUser/:id', auth('SAdmin'), sAdminController.deleteUser)

router.delete('/deleteAllUser', auth('SAdmin'), sAdminController.delAllUsers)


router.post('/addImage', auth('SAdmin'), upload.single('img'), async(req,res)=>{
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