import UserModel, { UserInput } from "../models/user.model"

const createUser = async (body: UserInput) => {
  try {
    const user = await UserModel.create(body)
    return user
  } catch (e: any) {
    throw new Error(e)
  }
}

export {
  createUser
}