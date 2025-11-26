import express from "express"
import { login, refresstoken, reg } from "../controllers/user.controller"
app.express()

app.post("/register", reg)
app.post("/login", login)
app.post("/refresh-token", refresstoken)

export default app;