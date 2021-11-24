import { Request, Response } from "express"
import { ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"
import IController from "./ControllerInterface"

let data: any[] = [
    { id: 1, name: "zainal1" },
    { id: 2, name: "zainal2" },
    { id: 3, name: "zainal3" },
    { id: 4, name: "zainal4" },
]

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.send(data)
    }

    create(req: Request, res: Response): Response {
        const { id, name } = req.body;

        data.push({
            id: id,
            name: name
        });

        return res.send(data)
    }

    show(req: Request, res: Response): Response {
        const { id } = req.params;

        let person = data.find(item => item.id == id)
        return res.send(person);
    }

    update(req: Request, res: Response): Response {
        const { id } = req.params;
        const { name } = req.body

        let person = data.find(item => item.id == id)
        person.name = name;

        return res.send(person)
    }

    delete(req: Request, res: Response): Response {
        const { id } = req.params;

        let people = data.find(item => item.id != id)

        return res.send(people)
    }

}

export default new UserController();