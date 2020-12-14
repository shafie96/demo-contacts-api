const mongoose = require('mongoose');


const ContactSchema = mongoose.Schema({
    email : {
        type : String,
        required : false
    },
    number : {
        type : String,
        required : false
    },
    owner : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Peoples'
    }]
});

module.exports = mongoose.model('Contacts', ContactSchema);