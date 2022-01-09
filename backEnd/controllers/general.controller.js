const userModel = require("../models/user.models")
const fciNewsModel = require('../models/fci_news.model')
const FineArtNewsModel = require('../models/Fine_Art.model')
const toursimNewsModel = require('../models/toursim_news.model')
const archaeologyNewsModel = require('../models/toursim_news.model')
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