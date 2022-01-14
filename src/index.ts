import express from 'express'
import router from './routes'

const app = express()
app.use(router)

app.listen(4000, () => {
  console.log('app is running on http://localhost:4000');
})