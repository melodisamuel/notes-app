const mongoose = require('mongoose');

// Define the Note schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    content: {
        type: String,
        // required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Note model
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
