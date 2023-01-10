const mongoose = require ('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true
    },
    passwordHash: String,
    nameComplete:{
        type: String
    },
    username:{
        type: String
    },
    number:{
        type: String
    },

});

userSchema.set('toJSON',{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.passwordHash
        delete returnedObject.__v
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;