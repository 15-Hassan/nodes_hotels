const mongoose = require('mongoose')
// const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = 'mongodb://127.0.0.1:27017/hotels' // Replace hotels with your data base
// mongodb://127.0.0.1:27017
// mongoose.connect(mongoURL, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })


mongoose.connect(mongoURL);


// Get the default connection
// Mongoose maintain a default  connection object representing the mongodb connection

const db = mongoose.connection

// Define event listener for databases connection


// connected jo hn wo event hn or db jo hn wo hmra variable jo hm na define kia hn upr
db.on('connected', ()=>{
    console.log("Connected to mongodb server");
});


// error jo hn wo event hn or db jo hn wo hmra variable jo hm na define kia hn upr or err variable hn jp hm ana print ka bd pass kia hn
db.on('error', (err)=>{
    console.log('Mongodb connection error', err);
});


// disconnected jo hn wo event hn or db jo hn wo hmra variable jo hm na define kia hn upr
db.on('disconnected',()=>{
    console.log('Mongodb dissconnected')
})


// Export the database connection
module.exports= db;

