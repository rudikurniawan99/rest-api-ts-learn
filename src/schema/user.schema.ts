import { string, object, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'name field required'
    }),
    email: string({
      required_error: 'email field required'
    }).email('need a valid email'),
    password: string({
      required_error: 'password field required'
    }).min(8, 'minimum have 8 character'),
    passwordConfirmation: string({
      required_error: 'password confirmation field is required'
    })
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: `password and password confirmation doesn't match`,
    path: ['passwordConfirmation']
  })
})

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>['body'], 'passwordConfirmation'>