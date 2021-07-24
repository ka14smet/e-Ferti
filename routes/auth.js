const router = require('express').Router();
const Farmer = require('../model/Farmer');



//validation 

const Joi = require('@hapi/joi');

const schema  = {
    name: joi.string().min(6).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),

}



router.post('/register', async (req, res) => {
 
    const {error} = Joi.validate(req.body,schema);
    //res.send(error.details[0].message);

    if(error) return res.status(400).send(error.details[0].message);

    const farmer = new Farmer({
        name: req.body.name,
        email: req.body.email,
        password : req.body.password 
    });
     try{
         const savedFarmer = await farmer.save();
         res.send(savedFarmer);
     }catch(err){
         res.status(400).send(err);
     } 
});

module.exports =router;