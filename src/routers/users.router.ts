import { Router } from "express";
import { createUserController, listUsersController, updateUserController } from "../controllers/users.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const userRouters = Router()

userRouters.post('', createUserController);
userRouters.get('', ensureAuthMiddleware, ensureIsAdmMiddleware, listUsersController);
userRouters.patch('/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, updateUserController)

export default userRouters