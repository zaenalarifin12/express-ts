import { Request, Response } from "express";
import IController from "./ControllerInterface"
import TodoService from "../services/TodoService";

class TodoController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req)
        const todos = await service.getAll()

        return res.send({
            data: todos,
            message: ""
        })
    }
    create = async(req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req)
        const todos = await service.store()

        return res.send({
            data: todos,
            message: ""
        })
    }
    show = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req)
        const todos = await service.getOne()

        return res.send({
            data: todos,
            message: ""
        })
    }
    update = async (req: Request, res: Response): Promise<Response> =>  {
        const service: TodoService = new TodoService(req)
        const todos = await service.update()

        return res.send({
            data: todos,
            message: ""
        })
    }
    delete = async(req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req)
        const todos = await service.delete()

        return res.send({
            data: todos,
            message: ""
        })
    }
}

export default new TodoController()