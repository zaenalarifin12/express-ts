import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class Authentication {
    public static passwordHash = (password: string): Promise<string> => {
        return bcrypt.hash(password, 10)
    }

    public static passwordCompare = (password: string, hashPassword: string): Promise<boolean> => {
        return bcrypt.compare(password, hashPassword)
    }

    public static generateToken = (id: number, username: string, password: string): string => {
        const secretKey: string = process.env.JWT_SECRET_KEY || "rahasia"

        const token:string = jwt.sign({ id, username, password }, secretKey)

        return token
    }
}

export default Authentication