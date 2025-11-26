import express from "express"
import User from "../model/model"

import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv"

export async function sign(req, res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            username: req.body.username,
            password: hashedPassword,
        });
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (e) {
        res.json({ message: "Error" });
    }
}

export async function login(req, res) {
    const user = await User.findOne({ username: req.body.username });

    try {
        const match = await bcrypt.compare(req.body.password, user.password);
        const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
        if (match) {
            res.json({ accessToken: accessToken });
        } else {
            res.json({ message: "Invalid Credentials" });
        }
    } catch (e) {
        console.log(e)
    }
}