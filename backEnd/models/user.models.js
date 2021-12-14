const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: [true, "First Name is Required"],
        trim: true
    },
    lname: {
        type: String,
        required: [true, "Last Name is Required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        trim: true,
        lowercase: true,
        unique: [true, "This Email Already in use"],
        validate(value){
            if(!validator.isEmail(value)) throw new Error('Please Enter a Valid Email')
        }
    },
    password: {
        type: String,
        required: [true, 'Password is Required'],
        trim: true,
        // validate(value){
        //     if(!validator.isStrongPassword(value, {
        //         minLength: 8,
        //         minLowercase: 1,
        //         minUppercase: 1,
        //         minNumbers: 1
        //     }))
        //         throw new Error ('Password must have atleast 1 LowerCase, 1 Uppercase, 1 Symbol and the minLenght is 8 charts')
        // }
    },
    phone: {
        type: String,
        min: 11,
        max: 11,
        trim: true, 
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG'])) throw new Error('Please Enter a valid mobile Number')
        }
    },
    role: {
        type: String,
        enum: ['Fci_admin', 'SAdmin'],
        required: [true, "You Must Choose The Role Of The User"]
    },
    image:{
        type: String
    },
   
    tokens: [
        {
            token: { type: String, required: true }
        }
    ]
},{
    timestamps: true
})

userSchema.methods.toJSON = function () {
    const user = this.toObject()
    let mydeleted = ['password', '__v']
    mydeleted.forEach(d => delete user[d])
    return user
}

userSchema.pre('save', async function () {
    const user = this
    if(user.isModified('password'))  user.password = await bcrypt.hash(user.password, 8)
    console.log(user)
})

userSchema.virtual('myNews', {
    ref: "News",
    localField: "_id",
    foreignField: "owner"
})

userSchema.statics.logIn = async (email, password) => {
    const user = await User.findOne({email})
    if(!user) throw new Error ('There is no user with this email')
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw new Error('Invalid Password')
    return user
}

userSchema.methods.generateToken =  function () {
    const user = this
    const token = jwt.sign({_id: user._id}, 'admin')
    user.tokens = user.tokens.concat({token})
    user.save()
    return token
}
const User = mongoose.model('User', userSchema)

module.exports = User