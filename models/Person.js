const mongoose =require('mongoose')

// ab hm schema define kena wla hn ka hmra person data dkhe ga ksa

// https://mongoosejs.com/docs/guide.html // 
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true    // mean yh field hme lazmi chahye hn or yhe field modatory nhe hn
    },
    age:{
        type:Number
    },
    work:{
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        require: true
    },
    mobile:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, // Ensures email is mandatory
        unique: true   // Ensures uniqueness
              // Removes extra spaces
    },
    
    address:{
        type: String
    },
    salary:{
        type: Number,
        required: true
    }   





});

// CREATE PERSON MODEL
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
 