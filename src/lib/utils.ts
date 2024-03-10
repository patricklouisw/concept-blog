import mongoose, { Promise } from "mongoose";
import { Mongoose } from 'mongoose';

const connection = {
    isConnected: Promise || null
}

export const connectToDb = async () => {
    try {
        if (connection.isConnected){
            console.log(typeof connection.isConnected)
            console.log("using existing connection")
            return;
        }

        mongoose.connection.on('connected', () => console.log('connected'));
        mongoose.connection.on('open', () => console.log('open'));
        mongoose.connection.on('disconnected', () => console.log('disconnected'));
        mongoose.connection.on('reconnected', () => console.log('reconnected'));
        mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
        mongoose.connection.on('close', () => console.log('close'));

        const db = await mongoose.connect(process.env.MONGODB_SECRET!);
        connection.isConnected = db
      } catch (error) {
        console.log(error)
        throw new Error("Error connecting to Db")
      }
}