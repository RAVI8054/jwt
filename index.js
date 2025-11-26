import express from 'express'
import mongoose from 'mongoose'


let connection = mongoose.connect('mongodb+srv://ravimrvr_db_user:cr9EqnZ426YgG00K@cluster0.pg6k3hn.mongodb.net/')

connection.then(
    console.log("connection done")
).catch(err => console.log(err))
const app = express()

app.express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000)