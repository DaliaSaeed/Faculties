const newsModel = require('../models/news.models')
const userModel = require('../models/user.models')

class Admin{
    static addNews = async (req, res)=> {
        try {
            const news = await new newsModel({
                ...req.body,
               owner: req.user._id,
               img: req.file.filename
            })
            await news.save()
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Added',
                data: news
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: " Error in adding News"
            })
        }
    }
    static showNews = async (req, res) => {
        try {
            await req.user.populate({
                path: 'myNews'
            })
            const news = await newsModel.find()
            res.status(200).send({
                apiStatus: true,
                message: 'Successfuly Fetched',
                data: req.user.myNews
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }

    static showSingleNews =async(req,res)=>{
        try{
            const singleNew = await newsModel.findById(req.params.id)
            if(!singleNew) throw new Error("This New not found")
            res.send({
                apiStatus:true,
                data:singleNew
            })
        }
        catch(e){
            res.send({
                apiStatus:false,
                data:e.message,
                message:"error loading New data"
            })
        }
    
    }

    // Authentication and LogIn
    static loginUser = async (req, res) => {
        try {
            const user = await userModel.logIn(req.body.email, req.body.password)
           const token = await user.generateToken()
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Logged In',
                data:  user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }

    static logOut = async (req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter(t => t.token != req.token)
            await req.user.save()
            res.status(200).send({
                apiStatus: true,
                message: 'Logged Out',
                data: req.user
            })
        } catch (e) {
            res.status(503).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }

    static logOutAll = async (req, res) => {
        try{
            req.user.tokens = []
            await req.user.save()
            res.status(200).send({
                apiStatus: true,
                message: 'Logged Out',
                data: req.user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }
}
module.exports = Admin
