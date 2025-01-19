const express = require('express')
const app = express()
const port = process.env.PORT || 5000  // jb hm ise online upload krye ge to machine apna lost number dha or machine host number nhe uthna ka lia or ka sign us ekia
const db = require('./db');
const Person = require('./routes/Person');
const bodyParser = require('body-parser');
const menu = require('./routes/menu')
require('dotenv').config()

// Always keep in mind agar ap nodemon library ma kam nhe to jo jo request ap set kro ge, uthni dfa ap ko server start krna hoge, blka nodemon ma zorrt nhe hn  is ki

// Body Parser
app.use(bodyParser.json()); // req ma hmra pass data ae ga

app.post('/menuItem', async (req, res) => {
    try {

        const data = req.body   // Hmare jo data client bhj rha wo body parser ma ae ga phr us sa hm req nikla ga

        const newPerson = new menu(data);

        // sav the new person to the database 
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })

    }

})


app.get('/menuItem', async(req,res)=>{
    try{
        const data = await menu.find();
        console.log("Fetch data successfull")
        res.status(200).json(data)

    }catch (err){
        console.log(err)
        res.status(500).json({error: 'Internal server error'})

    }

})
 //: is used for variable
app.get('/person/:workType', async(req,res)=> {
    try{
        const workType = req.params.workType
        if(workType == 'chef' || workType =='manager' || workType =='waiter'){
            const response = await Person.find({work:workType});
            console.log('response Fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid work type'})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})

    }

}) 



app.get('/person/:workType', async(req,res)=> {
    try{
        const workType = req.params.workType
        if(workType == 'chef' || workType =='manager' || workType =='waiter'){
            const response = await Person.find({work:workType});
            console.log('response Fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid work type'})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})

    }

}) 



app.get('/menuItem/:taste', async(req,res)=> {
    try{
        const taste = req.params.taste
        if(taste == 'sweet' || taste =='spicy' || taste =='sour'){
            const response = await Person.find({eatTaste:taste});
            console.log('response Fetched menu');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid work type'})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})

    }

}) 
















// app.post('/menuItem', async (req, res) => {
//     try {
//         console.log('Request received:', req.body); // Log request body
        
//         const data = req.body;
//         const newPerson = new menu(data);

//         const response = await newPerson.save();
//         console.log('Data saved:', response); // Log saved data
        
//         res.status(200).json(response);
//     } catch (err) {
//         console.error('Error saving data:', err); // Log detailed error
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

 







app.post('/person', async (req, res) => {
    try {

        const data = req.body   // Hmare jo data client bhj rha wo body parser ma ae ga phr us sa hm req nikla ga

        const newPerson = new Person(data);

        // sav the new person to the database 
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.
        status(500).json({ error: 'Internal server error' })

    }

})

app.get('/person', async (req, res) => {
    try {

        // sav the new person to the database 
        const data = await Person.find();
        console.log('fetch data');
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.
        status(500).json({ error: 'Internal server error' })

    } 

})


// app.put('/person', async (req, res) => {
//     try {

//         // sav the new person to the database 
//         const data = await Person.update();
//         console.log('fetch data');
//         res.status(200).json(data);

//     } catch (err) {
//         console.log(err);
//         res.
//         status(500).json({ error: 'Internal server error' })

//     }

// })





// const data= req.body   // Hmare jo data client bhj rha wo body parser ma ae ga phr us sa hm req nikla ga

// const newPerson = new Person(data);

// // sav the new person to the database 
// newPerson.save((error,savedPerson) => {
//     if(error){
//         console.log('Error saving person', error)
//         res.status(500).json({error: 'Internal server error'})

//     }
//     else{
//         console.log('Successful send data', savedPerson)
//         res.status(200).json({person:'response created successful'})
//     }


// })




// newPerson.name = data.name,
// newPerson.name = data.age
// newPerson.name = data.work
// newPerson.name = data.mobile
// newPerson.name = data.email
// newPerson.name = data.address
// newPerson.name = data.salary





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.get('/', (req,res)=>{
//     res.send('Welcome')
// })

// app.post('/send', (req,res)=>{
//     res.send("Successful completed")
// })


// Body parser:
//body parser is a middlewear library of express.js and it used to parse and extract the body of incoming HTTP requests;
// client form fill krye kse bhe data format ma  and data jis bhe format ma hn chahye wo json hn, url encoded hn etc. Wo ise handle krna ma madad krta hn
// Const bodyParser = require('body - parser')
//app.use(bodyparser.json());



