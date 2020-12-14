const express = require('express');
const router = express.Router();
const People = require('../models/People');
const Contact = require('../models/Contact');

// router.get('/', async (req, res) => {
//     try{
//         const contact = await Contatcs.find();
//         res.status(200).json(contact);
//     }catch{
//         res.status(500).json({message : err});
//     }
// });

//Find people base on query
router.get('/', async (req, res) => {
    try{

        const people = await People.find({"$or" :[
            {"contact.email" : req.query.q},
            {"contact.number" : req.query.q},
            {name : req.query.q}
        ]});
        res.status(200).json(people); 
    }catch{
        res.status(500).json({message : err});
    }
});

module.exports = router;