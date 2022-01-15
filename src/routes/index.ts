import { Router } from "express";
import testRoute from './test.route'
import userRoute from './user.routes'

const router = Router()

router.use(testRoute)
router.use('/users',userRoute)

export default router