require('dotenv').config()
const express = require('express')
require("../db/dbConnection")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const Fci_adminRouter = require("../routes/Fci_admin.routes")
app.use("/Fci_admin", Fci_adminRouter)

const superAdminRouter = require("../routes/superAdmin.routes")
app.use("/Sadmin", superAdminRouter)

app.use(cors())
module.exports = app