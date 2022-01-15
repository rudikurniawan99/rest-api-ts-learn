import mongoose, { Document } from 'mongoose'
import argon from 'argon2'

export interface UserInput{
  name: string
  email: string
  password: string
}

export interface UserDocument extends UserInput, Document{
  createdAt: Date,
  updatedAt: Date,
  verifyPassword: (param: string) => Promise<boolean>
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

userSchema.pre('save', async function(next){
  let user = this as UserDocument 
  if(!user.isModified('password')){
    next()
  }
  const hash = await argon.hash(user.password)
  user.password = hash
})

userSchema.methods.verifyPassword = async function(pass: string): Promise<boolean> {
  let user = this as UserDocument
  try {
    return await argon.verify(user.password, pass) 
  } catch (e: any) {
    return false 
  }
}

export const User = mongoose.model<UserDocument>('User', userSchema)
export default User