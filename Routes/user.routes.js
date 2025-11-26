import express from "express"
import { login, reg } from "../controllers/user.controller"
app.express()

app.post("/register", reg)
app.post("/login", login)
// app.post(/refresh-token)

export default app;