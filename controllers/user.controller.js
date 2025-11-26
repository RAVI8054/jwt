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
        let { email, password } = req.body

        let user = User.findOne({ email: email })
        if (!user) {
            rea.status(401).json({ msg: "not user find" })
        }
        const match = await bcrypt.compare(password, user.password);
        const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
        if (match) {
            res.json({ accessToken: accessToken }, { expiresIn: '1min' });
        } else {
            res.json({ message: "Invalid Credentials" });
        }
    } catch (e) {
        console.log(e)
    }
}

export async function refresstoken(req, res) {
    try {
        const token = req.cookie.jwt
        if (!token) {
            return res.status(401).json({
                msg: "no token refress"
            })
        }

    } catch (error) {

    }
}