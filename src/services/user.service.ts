import { omit } from "lodash"
import UserModel, { UserInput } from "../models/user.model"

const createUser = async (body: UserInput) => {
  try {
    const user = await UserModel.create(body)
    return user
  } catch (e: any) {
    throw new Error(e)
  }
}

const verifyUser = async ({email, password}: { email: string, password: string }) => {
  const user = await UserModel.findOne({ email })
  if(!user){
    return false
  }
  const validPassword = await user.verifyPassword(password)

  if(!validPassword) false

  return omit(user, ['password'])
}

export {
  createUser,
  verifyUser
}