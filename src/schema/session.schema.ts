import { object, string, TypeOf } from "zod";

export const createSessionSchema = object({
  body: object({
    email: string({
      required_error: 'email is required'
    }).email('need valid email'),
    password: string({
      required_error: 'password is required'
    }).min(8, 'minimum have 8 character')
  })
})

export type CreateSessionInput = TypeOf<typeof createSessionSchema>['body']

