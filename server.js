const  express = require('express');
const app = express();
const mongoose =require('mongoose');
const dotenv = require('dotenv');
//import routes

const authroute = require ('./routes/auth');

dotenv.config();

//connect to DB 

mongoose.connect( process.env.DB_Connect, 
{ useNewUrlParser: true },
()=> console.log ('connected to db')
);


//Middlewares

app.use(express.json());


// Route Middlewares

app.use('/api/user', authroute);




app.listen(3000, ()=> console.log('server up and running'));