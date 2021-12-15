const userModel = require('../models/user.models')
const newstModel = require('../models/news.models')

class SAdmin  {

    static register = async (req, res) => {
        try {
            //if(!req.body.role || req.body.role =="Admin") throw new Error("Please choose an Sadmin type")
            const user = await new userModel(req.body)
            //user.role="SAdmin"
            await user.save()
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Created',
                data: user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }


    static readUsers = async (req, res) => {
        try {
            const user = await userModel.find()
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Found',
                data: user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }

    }

    static updateUser = async (req, res) => {
        try {
            let user = req.user
            for(let p in req.body){
                user[p] = req.body[p]
            }
            await user.save()
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Updated',
                data: req.user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }

    static deleteUser = async (req, res) => {
        try {
            await userModel.findByIdAndDelete(req.params.id)
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Deleted',
                data: req.user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }

    static delAllUsers = async(req,res)=>{
        try{
            await userModel.deleteMany()
            res.send({
                apiStatus: true,
                message:"deleted"
            })
        }
        catch(e){
            res.send({
                apiStatus:false,
                data:e.message,
                message:"error on delete"
            })
        }
    
    }

    static addNews = async (req, res)=> {
        try {
            const news = await new newstModel({
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
            const news = await newstModel.find()
            res.status(200).send({
                apiStatus: true,
                message: 'Successfuly Fetched',
                data: news
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
            const singleNew = await newstModel.findById(req.params.id)
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

    static deleteSingleNew = async (req, res) => {
        try {
            await newstModel.findByIdAndDelete(req.params.id)
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Deleted',
                data: req.user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }

    static delAllNews = async(req,res)=>{
        try{
            await newstModel.deleteMany()
            res.send({
                apiStatus: true,
                message:"News deleted"
            })
        }
        catch(e){
            res.send({
                apiStatus:false,
                data:e.message,
                message:"error on delete"
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

module.exports = SAdmin