// // CRUD - CREATE READ UPDATE DELETE

// // const mongodb = require('mongodb')
// // const MongoClient = mongodb.MongoClient
// // const ObjectID = mongodb.ObjectID

// const {MongoClient, ObjectID} = require('mongodb')

// const id = new ObjectID()

// // console.log(id)
// // console.log(id.id)
// // console.log(id.id.length)

// // console.log(id.toHexString())
// // console.log(id.toHexString().length)

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
//     if(error) {
//         console.log('Unable to connect to database' )
//     }
    
//     console.log('Connected correctly !')
    
//     const db = client.db(databaseName)

//     // CREATE

//     // db.collection('users').insertOne({
//     //     name : 'Eduardo',
//     //     age : 31
//     // }, (error, result) => {
//     //     if(error) {
//     //         return console.log('Unable to inser user')
//     //     }
//     //     console.log(result.ops)
//     // })

//     // db.collection('users').insertMany([
//     //     {
//     //         name : 'Jim',
//     //         age : 27
//     //     },
//     //     {
//     //         name : 'Janis',
//     //         age : 27
//     //     },
//     //     {
//     //         name : 'Kurt',
//     //         age : 27
//     //     },
//     //     {
//     //         name : 'Amy',
//     //         age : 27
//     //     },
//     // ], (error, result) => {
//     //     if(error) {
//     //         return console.log('Unable to inser user')
//     //     }
//     //     console.log(result.ops)
//     // })

//     // db.collection('tasks').insertMany([
//     //     {
//     //         description : 'Lavar os dentes',
//     //         completed : true
//     //     },
//     //     {
//     //         description : 'Entrar na Mindera',
//     //         completed : false
//     //     },
//     //     {
//     //         description : 'Ter um Rhodes',
//     //         completed : true
//     //     },
//     //     {
//     //         description : 'Ir às compras',
//     //         completed : false
//     //     },
//     //     {
//     //         description : 'Mandar o senhorio pó crlh',
//     //         completed : false
//     //     }
//     // ], (error, result) => {
//     //     if(error) {
//     //         return console.log('Unable to inser user')
//     //     }
//     //     console.log(result.ops)
//     // })

//     // READ 
//     //
//     // db.collection('users').findOne({name: 'Gervasio'}, (error, user) => {
//     //     if(error) {
//     //         return console.log('Unable to fetch user')
//     //     }
//     //     console.log(user)
//     // })

//     // db.collection('users').findOne({_id: new ObjectID("5ffed4029dc7a905445c0b91")}, (error, user) => {
//     //     if(error) {
//     //         return console.log('Unable to fetch user')
//     //     }
//     //     console.log(user)
//     // })

//     // db.collection('users').find({age : 27}).toArray( (error, users) => {
//     //     if(error) {
//     //         return console.log('Unable to fetch user')
//     //     }
//     //     console.log(users)
//     // })

//     // db.collection('users').find({age : 27}).count( (error, users) => {
//     //     if(error) {
//     //         return console.log('Unable to fetch user')
//     //     }
//     //     console.log(users)
//     // })

//     // FIND w/ ID
//     // 
//     // db.collection('tasks').findOne({_id : new ObjectID("5ffedc1512f4cc05fe5e84d1")}, (error, result) => {
//     //     if(error) {
//     //         return console.log()
//     //     }
//     //     console.log(result)
//     // })

//     // find tasks incompletas para um array
//     // db.collection('tasks').find({completed : false}).toArray((error, result) => {
//     //     if(error) {
//     //         return console.log('Unable to fetch task')
//     //     }
//     //     else {
//     //         console.log(result)
//     //     }
//     // })

//     // UPDATE_ONE
//     //
//     // db.collection('users').updateOne({
//     //     _id : new ObjectID("5ffee5127929f606d4d533b6")
//     // }, {
//     //     $set : {
//     //         name : 'Mike The Dike'
//     //     },
//     //     $inc : {
//     //         age : 1
//     //     }
//     // }).then( (result) => {
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })

//     // UPDATE_MANY
//     //
//     // db.collection('tasks').updateMany({
//     //     completed : false
//     // }, { 
//     //     $set : {
//     //         completed : true
//     //     }
//     // }).then( (result) => {
//     //     console.log(result.modifiedCount)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })

//     // DELETE_MANY
//     //
//     // db.collection('users').deleteMany({
//     //     age : 27
//     // }).then((result) => {
//     //     console.log(result.deletedCount)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })

//     // DELETE_ONE
//     //
//     // db.collection('tasks').deleteOne({
//     //     _id : new ObjectID("5ffedc1512f4cc05fe5e84d3")
//     // }).then( (result) => {
//     //     console.log(result.deletedCount)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })


// })