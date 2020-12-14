const express = require('express');
const router = express.Router();
const People = require('../models/People');
const Contact = require('../models/Contact');


//Get all the people
router.get('/', async (req, res) => {
    try{
        const people = await People.find();
        res.status(200).json(people);
    }catch{
        res.status(500).json({message : err});
    }
});


//Create new people
router.post('/', async (req,res) =>{
    const people = new People({
        name : req.body.name,
        age : req.body.age,
        height : req.body.height
    });

    try{
        const savedPeople = await people.save();
        res.status(201).json(savedPeople);
    }catch(err){
        res.status(500).json({message : err});
    }
});

// //Find people by people id
// router.get('/:id', async (req, res) => {
//     try{
//         const people = await People.findById(req.params.id);
//         res.status(200).json(people);
//     }catch(err){
//         res.status(500).json({message : err});
//     }
// });

//delete people by id
router.delete('/:id', async (req, res) => {
    try{
        const removePeople = await People.remove({_id: req.params.id});
        res.status(200).json(removePeople);
    }catch(err){
        res.status(500).json({message : err});
    }
});

//post people contact
router.post('/:id/contacts', async (req,res) =>{
    const contact = new Contact({
            email : req.body.email,
            number : req.body.number 
    });

    try{
        const people = await People.findById(req.params.id);
        contact.owner = people;
        const savedContact = await contact.save();
        people.contact.push(contact)
        const savedPeople = await people.save();
        res.status(201).json(savedPeople);
    }catch(err){
        res.status(500).json({message : err});
    }
});

module.exports = router;