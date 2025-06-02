const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    text : {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todo', todoSchema);
