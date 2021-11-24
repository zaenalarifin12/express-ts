import BaseRoute from "./BaseRoute"

import { auth } from "../middlewares/AuthMiddleware";
// controller
import UserController from "../controllers/UserController";

class UserRoutes extends BaseRoute {

    public routes(): void {
        this.router.get("/", auth, UserController.index)
        this.router.post("/", UserController.create)
        this.router.put("/:id", UserController.update)
        this.router.get("/:id", UserController.show)
        this.router.delete("/:id", UserController.delete)
    }
}

export default new UserRoutes().router;