import SessionModel from '../models/session.model'
import { signJwt } from '../utils/jwt'

export const createSession = async (userId: string) => {
  const session = await SessionModel.create({
    user: userId,
  })
  return session
}

export const signAccessToken = async (userId: string) => {
  const token = await signJwt({user: userId}, 'accessTokenPrivateKey', {
    expiresIn: '15m'
  })
  return token
}
