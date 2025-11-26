import mongoose from 'mongoose';
const { Schema } = mongoose;

const register = new Schema({
    name: String,
    lastname: String,
    email: String,
});

const User = mongoose.model('user', register);

export default User;