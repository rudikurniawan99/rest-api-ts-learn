require('dotenv').config('../.env')
import express from 'express'
import router from './routes'

const app = express()
app.use(router)


app.listen(process.env.PORT || 4000, () => {
  console.log(`app is running on http://localhost:${process.env.PORT}`);
})