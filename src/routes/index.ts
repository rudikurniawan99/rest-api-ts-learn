import { Router } from "express";
import userRoute from './user.routes'
import authRoute from './session.routes'

const router = Router()

router.use('/users',userRoute)
router.use('/auth', authRoute)

export default router