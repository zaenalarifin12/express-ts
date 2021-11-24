import { Router, Request, Response } from "express";
import Authentication from "../utils/Authentication";
const db = require("../db/models");
import jwt from "jsonwebtoken"

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;

        const Hashpassword: string = await Authentication.passwordHash(password)

        const createdUser = await db.user.create({
            username: username,
            password: Hashpassword
        })

        return res.send(createdUser);
    }

    login = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body

        const user = await db.user.findOne({
            where: {
                username: username
            }
        })


        let compare = await Authentication.passwordCompare(password, user.password)

        if (compare) {
            const token = Authentication.generateToken(user.id, user.username, user.password)
            return res.send({
                token
            })
        }

        return res.send("auth failed")

    }

    profile = async(req: Request, res: Response): Promise<Response> => {
        return res.send(req.app.locals.credential)
    }
}

export default new AuthController()