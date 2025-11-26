import mongoose from 'mongoose';
const { Schema } = mongoose;

const register = new Schema({
    username: String,
    password: String,
    email: String,
});

const User = mongoose.model('user', register);

export default User;