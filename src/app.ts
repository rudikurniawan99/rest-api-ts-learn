require('dotenv').config('../.env')
import express from 'express'
import router from './routes'
import connectDB from './utils/connectDB'
import config from 'config'
import cors from 'cors'

const port = config.get<number>('port')

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)


app.listen( port || 4000, () => {
  console.log(`app is running on http://localhost:${process.env.PORT}`);
  connectDB()
})