import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
    try {
        const data = req.body

        const createdUser = await createUserService(data)

        return res.status(201).json(createdUser)

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export const listUsersController = async(req: Request, res: Response) => {

    const users = await listUsersService()

    return res.send(users)

}

export const updateUserController = async(req: Request, res: Response) => {
    try {
        const data = req.body
        const {id} = req.params

        const updatedUser = await updateUserService(data, id)

        return res.json(updatedUser)

    } catch (error) {
        if(error instanceof Error){
            return res.status(401).json({
                message: error.message
            })
        }
    }
}