import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    _id: { type: String, _id: false },
    name: { type: String, require: true },
    surname: { type: String, require: true   },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
});

const UserModel = model('User', userSchema);

export default UserModel;
