const userModel = require('../models/user.models')
const newstModel = require('../models/news.models')
const news = require('../models/news.models')
const fciNewsModel = require('../models/fci_news.model')
const FineArtNewsModel = require('../models/Fine_Art.model')
const toursimNewsModel = require('../models/toursim_news.model')
const upload = require('../middleware/fileUpload')

class admin  {

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

    static delAllFciNews = async(req,res)=>{
        try{
            await fciNewsModel.deleteMany()
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
    static delAllFineArtNews = async(req,res)=>{
        try{
            await FineArtNewsModel.deleteMany()
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
    static delAllTourismNews = async(req,res)=>{
        try{
            await toursimNewsModel.deleteMany()
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
}

module.exports = admin