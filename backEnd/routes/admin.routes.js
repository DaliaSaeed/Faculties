const router = require("express").Router()
const adminController = require('../controllers/admin.controller')
const auth = require('../middleware/auth')
const upload = require('../middleware/fileUpload')


router.post("/register",upload.single('image'),adminController.register)
router.delete('/deleteSingleNew/:id', auth('admin'), adminController.deleteSingleNew)

router.delete('/delAllFciNews', auth('admin'), adminController.delAllFciNews)
router.delete('/delAllFineArtNews', auth('admin'), adminController.delAllFineArtNews)
router.delete('/delAllTourismNews', auth('admin'), adminController.delAllTourismNews)

router.get('/AllUsers',auth('admin'), adminController.readUsers)

router.delete('/deleteUser/:id', auth('admin'), adminController.deleteUser)

router.delete('/deleteAllUser', auth('admin'), adminController.delAllUsers)


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