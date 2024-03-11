import mongoose, { ConnectionStates, Promise } from "mongoose";
import { Mongoose } from 'mongoose';

type Connection = {
  isConnected: ConnectionStates | null
}

const connection:Connection = {
    isConnected: null
}

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      return;
    }

    const db = await mongoose.connect(process.env.MONGODB_SECRET!);
    connection.isConnected = db.connections[0].readyState;
    return
  } catch (error) {
    console.log(error);
    throw new Error("Error: can't connect to db");
  }
};