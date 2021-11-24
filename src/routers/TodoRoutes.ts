import BaseRoute from "./BaseRoute";
import { auth } from "../middlewares/AuthMiddleware"
import TodoController from "../controllers/TodoController"
import validateTodo from "../middlewares/TodoValidator";

class TodoRoute extends BaseRoute {
    routes(): void {
        this.router.get("/", auth, TodoController.index)
        this.router.post("/", auth, validateTodo, TodoController.create)
        this.router.get("/:id", auth, TodoController.show)
        this.router.put("/:id", auth, TodoController.update)
        this.router.delete("/:id", auth, TodoController.delete)
    }

}

export default new TodoRoute().router