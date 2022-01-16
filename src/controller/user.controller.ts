import { Request, Response } from 'express'
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../services/user.service';

export const createUserHandler = async (req: Request<{}, {}, CreateUserInput>, res: Response) => {
  const { body } = req
  
  try {
    const user = await createUser(body)

    res.status(201).json({
      success: true,
      data: user
    })
  } catch (e: any) {
    console.log(e.message);
  }
}