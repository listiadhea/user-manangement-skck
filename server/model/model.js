var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jenis_kelamin: String,
    status: String,
    
    // New BPJS management fields
    pekerjaan: String,
    tempat_lahir: String,
    tanggal_lahir: String
});

var User = mongoose.model('User', schema);

module.exports = User;
