require('dotenv').config()
const express = require('express')
require("../db/dbConnection")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const userRouter = require("../routes/user.routes")
app.use("/user", userRouter)

const adminRouter = require("../routes/admin.routes")
app.use("/admin", adminRouter)

const generalRouter = require("../routes/general.routes")
app.use("/general", generalRouter)

app.use('/uploads', express.static('uploads'))
app.use(cors())
module.exports = app