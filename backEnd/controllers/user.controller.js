const newsModel = require('../models/news.models')
const userModel = require('../models/user.models')

class Admin{
    
    
    static showNews = async (req, res) => {
        try {
            await req.user.populate({
                path: 'myNews',
                
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

    // Authentication and LogIn
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
