const { Schema, model } = require('mongoose');

const usringscheme = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

usringscheme.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', usringscheme);

module.exports = User;