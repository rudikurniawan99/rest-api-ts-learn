import SessionModel from '../models/session.model'

export const createSession = async (userId: string) => {
  const session = await SessionModel.create({
    user: userId,
  })
  return session
}

