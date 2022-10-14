import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entity"
import { IUser } from "../../interfaces/users"


const listUsersService = async (): Promise<IUser[]> => {
    const userRepository = AppDataSource.getRepository(User)

    const users: IUser[] = await userRepository.find()

    users.map(user => {
        delete user.password
        return user
    })

    return users

}

export default listUsersService