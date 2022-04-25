const userModel = require("../models/user.models")
const fciNewsModel = require('../models/fci_news.model')
const FineArtNewsModel = require('../models/Fine_Art.model')
const toursimNewsModel = require('../models/toursim_news.model')
const AlsunNewsModel = require('../models/alsun_news.model')
const archaeologyNewsModel = require('../models/archaeology_news.model')
const MedicineNewsModel = require('../models/medicine_news_model')
const newstModel = require('../models/news.models')


class General  {

    static addFciNews = async (req, res)=> {
        try {
            const news = await new fciNewsModel({
                ...req.body,
              // owner: req.user._id,
               image: req.files
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
    static addFineArtNews = async (req, res)=> {
        try {
            const news = await new FineArtNewsModel({
                ...req.body,
              // owner: req.user._id,
               image: req.files
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
    static addToursimNews = async (req, res)=> {
        try {
            const news = await new toursimNewsModel({
                ...req.body,
              // owner: req.user._id,
               image: req.files
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
    static addAlsunNews = async (req, res)=> {
        try {
            const news = await new AlsunNewsModel({
                ...req.body,
              // owner: req.user._id,
               image: req.files
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
    static addArchaeologyNews = async (req, res)=> {
        try {
            const news = await new archaeologyNewsModel({
                ...req.body,
              // owner: req.user._id,
               image: req.files
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
    static addMedicineNews = async (req, res)=> {
        try {
            const news = await new MedicineNewsModel({
                ...req.body,
              // owner: req.user._id,
               image: req.files
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
    
    static showMedicineNews = async (req, res) => {
        try {
            const news = await MedicineNewsModel.find()
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
    static showMedicineSingleNews =async(req,res)=>{
        try{
            const singleNew = await MedicineNewsModel.findById(req.params.id)
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

    static showSingleNew = async (req, res) => {
        try {
            const singleNew = await newstModel.findById(req.body.id)
            if(!singleNew) throw new Error('This New not Found')
            res.status(200).send({
                apiStatus: true,
                message: 'Successfuly Fetched',
                data: singleNew
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }
    static showFciNews = async (req, res) => {
        try {
            const news = await fciNewsModel.find()
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
    static showFciSingleNews =async(req,res)=>{
        try{
            const singleNew = await fciNewsModel.findById(req.params.id)
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
    
    static showFineArtNews = async (req, res) => {
        try {
            const news = await FineArtNewsModel.find()
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
    static showFineArtSingleNews =async(req,res)=>{
        try{
            const singleNew = await FineArtNewsModel.findById(req.params.id)
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
    static showToursimNews = async (req, res) => {
        try {
            const news = await toursimNewsModel.find()
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
    static showToursimSingleNews =async(req,res)=>{
        try{
            const singleNew = await toursimNewsModel.findById(req.params.id)
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
    static showAlsunNews = async (req, res) => {
        try {
            const news = await AlsunNewsModel.find()
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
    static showAlsunSingleNews =async(req,res)=>{
        try{
            const singleNew = await AlsunNewsModel.findById(req.params.id)
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
    static showArchaeologyNews = async (req, res) => {
        try {
            const news = await archaeologyNewsModel.find()
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
    static showArchaeologySingleNews =async(req,res)=>{
        try{
            const singleNew = await archaeologyNewsModel.findById(req.params.id)
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
    


    static updateNew = async (req, res) => {
        try {
            console.log(req.body);
            const news = await newstModel.findOneAndUpdate({_id: req.body.id, owner: req.user._id}, req.body)
            console.log(news);
            if(!news) throw new Error('This New not found')
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Updated',
                data: news
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
                message: " Error in Update New Data"
            })
        }
    }

    //Authentication and LogIn
    static loginUser = async (req, res) => {
        try {
            const user = await userModel.logIn(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.status(200).send({
                apiStatus: true,
                message: 'Succesfully Logged In',
                token,
                data: user
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                message: e.message,
            })
        }
    }

    static profile =async(req,res)=>{
        res.send(req.user)
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

module.exports = General