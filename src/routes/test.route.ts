import { Router, Response } from "express";

const router = Router()

router.get('/test', (_, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'testing success to run'
  })
})

export default router