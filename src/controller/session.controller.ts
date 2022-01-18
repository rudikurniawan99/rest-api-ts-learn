import { Request, Response } from "express"
import { createSession } from "../services/session.service";
import {  findUserByEmail } from "../services/user.service";

export const createUserSessionHandler = async (req: Request<{}, {}, { email: string, password: string }>, res: Response) => {
  const { body } = req

  const user = await findUserByEmail(body.email)
  if(!user){
    res.status(401).json({
      success: false,
      message: `not find user with this email`
    })
  }

  const valid = await user.verifyPassword(body.password)
  if(!valid){
    res.status(402).json({
      success: false,
      message: `email and password doesn't match`
    })
  }

  const session = await createSession(user._id)
  
  // make access token
  // make refresh token



}