const express = require('express')
const multer = require('multer')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const {sendWecolmeEmail, sendGoodbyeEmail} = require('../emails/account')
const sharp = require('sharp')

// SIGN IN - CREATE USER
router.post('/users', async (req, res) => {
    const user = new User(req.body)	
    try {	
        await user.save()
        sendWecolmeEmail(user.email, user.name)
        const token = await user.generateAuthToken()
        console.log('User SIGN-IN')
        res.status(201).send({user, token})
    } catch (error) {
        res.status(400).send(error)
    }
})
 
// LOGIN
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials( req.body.email, req.body.password )
        const token = await user.generateAuthToken()

        console.log('User LOGIN')

        res.send({user, token})
    } catch (error) {
        res.status(400).send("Unable to login!\n")
    }
})
 
// LOGOUT
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        
        console.log('User LOGOUT')

        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

// LOGOUT EVERYWHERE
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        
        console.log('User LOGOUT everywhere')

        res.send()
    } catch (error) {
        res.status(500).send()
    }
})


// GET USERS
router.get('/users', auth, async (req, res) => {
    try {
        const users = await User.find({})

        console.log('GET Users')

        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

// ME
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})


// GET USER WITH ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        
        if(!user) {
            res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

// EDIT USER WITH ID
router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'age', 'email', 'password']
    const isValidOperation = updates.every( (update) => allowedUpdates.includes(update) )

    if(!isValidOperation) {
        return res.status(400).send({error: 'invalid updates!'})
    }

    try {
        updates.forEach((update) =>  req.user[update] = req.body[update])
        await req.user.save()
        console.log('User EDITED')
        res.status(200).send(req.user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// DELETE USER
router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        sendGoodbyeEmail(req.user.email, req.user.name)
        console.log('User DELETED')
        res.status(200).send(req.user)
    } catch (error) {
        res.status(500).send(error)
    }
})

const upload = multer({
    limits : { fileSize : 1000000 }, 
    fileFilter(req, file, cb) {
        if(! file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb( new Error('File must be a image') )
        }
        cb(undefined, true)
    }
})

router.post('/users/me/avatar', auth, upload.single('avatar'), async (req,res) => {
    const buffer = await sharp(req.file.buffer).resize({width : 250, height : 250}).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send( {error: error.message} )
})

router.delete('/users/me/avatar', auth, async (req,res) => {
    req.user.avatar = undefined
    await req.user.save()
    console.log('User avatar DELETED')
    res.status(200).send()
}, (error, req, res, next) => {
    res.status(400).send( {error: error.message} )
})

router.get('/users/:id/avatar', async(req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if(!user || !user.avatar) {
            throw new Error()
        }
        res.set('Content-Type', 'img/png')
        res.send(user.avatar)
    } catch (error) {
        res.status(404).send()
    }
})

module.exports = router
