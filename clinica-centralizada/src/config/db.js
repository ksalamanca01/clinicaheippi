import mongoose from 'mongoose';

const connectDB = (url) =>
    mongoose.connect(url).then(() => console.log('Base de Datos Conectada'));

export default connectDB;
