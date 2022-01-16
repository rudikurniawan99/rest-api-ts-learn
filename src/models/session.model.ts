import mongoose, { Document } from 'mongoose'
import { UserDocument } from './user.model'
import User from './user.model'

export interface SessionInput {
  user: UserDocument['_id']
  valid: boolean
  userAgent: string
}

export interface SessionDocument extends SessionInput, Document{
  createdAt: Date
  updatedAt: Date
}

export const createSesstionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  valid: {
    type: Boolean,
    default: true
  },
  userAgent: {
    type: String
  }
}, {
  timestamps: true
})

const Session = mongoose.model<SessionDocument>('Session', createSesstionSchema)
export default Session