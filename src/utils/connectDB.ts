import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(String(process.env.MONGODB_URI), {
      dbName: process.env.DB_NAME
    }, () => {
      console.log('connected to db');
      
    })
  } catch (e) {
    console.log(e);
  }
}

export default connectDB