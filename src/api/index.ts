import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { userRouter } from '../routes/user'

const app = express()
app.use(json())
app.use(userRouter)

mongoose.connect("mongodb+srv://suntecTMS:suntectms2022@cluster0.zm9cv.mongodb.net/viconet?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, () => {
  console.log('connected to database')
})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})