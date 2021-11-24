import { Request, Response, NextFunction } from "express"
import { check, validationResult } from "express-validator"

const validateTodo = [
    check("description").isString().isLength({ min: 1 }),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(422).send({
                errors: errors.array()
            })
        }

        next()

    }
]

export default validateTodo