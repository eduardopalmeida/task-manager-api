const mongoose = require('mongoose')
// const User = require('../models/user')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

console.log("Mongoose activated!")

/*
// Mongoose Models

const User = mongoose.model('User', {
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        default : 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number!')
            }
        }
    },
    email : {
        type : String,
        required: true,
        trim: true,
        lowercase : true,
            validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password : {
        type : String,
        required : true,
        trim : true,
        minlength : 7,
        validate(value) {
            if(value.includes('password')){
                throw new Error('Your password should not be password.')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    description : {
        type : String
    },
    completed : {
        type: Boolean
    }
})

const me = new User({
    name : 'Eduardo',
    age : 20,
})

const bill = new User({
    name : 'Bill',
    age : 45,
    email : 'billmathewsatiol.com'
})

const gervasio = new User({
    name: 'gervasio',
    email: 'gervas@IOL.COM    '
})

const userValid = new User({
    name : 'Hercules',
    email : 'muscles@prozis.pt',
    age : 52,
    password : 'sandesdeatum'
})

const userinValid = new User({
    name : 'Zeus',
    email : 'god@lightningbolt.com',
    age : 500,
    password : 'okayokay'
})

const task1 = new Task({
    description : 'Fazer as compras',
    completed : false
})

// Save mongoose

bill.save().then(() => {
    console.log(bill)
}).catch((error) => {
    console.log('Error: ', error)
})

gervasio.save().then(() => {
    console.log(gervasio)
}).catch((error) => {
    console.log('Error: ', error)
})

task1.save().then(() => {
    console.log(task1)
}).catch((error) => {
    console.log('Error :', error)
})

userValid.save().then(() => {
    console.log(userValid)
}).catch((error) => {
    console.log( 'Error :', error)
} )

userinValid.save().then(() => {
    console.log(userinValid)
}).catch((error) => {
    console.log( 'Error :', error)
} )

*/