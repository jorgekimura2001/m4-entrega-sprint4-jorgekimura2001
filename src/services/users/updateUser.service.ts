import { hash } from "bcrypt"
import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entity"
import { IUserUpdate } from "../../interfaces/users"

const updateUserService = async (data: IUserUpdate, id: string, isAdm: boolean) => {

    if(isAdm === false){
        throw new Error('User is not admin')
    }

    if(data.name !== undefined || data.email !== undefined || data.password !== undefined){
        const userRepository = AppDataSource.getRepository(User)
    
        const users = await userRepository.find()
    
        const user = users.find(user => user.id === id)
    
        const updatedUser = {
            name: data.name ? data.name : user?.name,
            email: data.email ? data.email : user?.email,
            password: data.password ? await hash(data.password,10) : user?.password 
        }

        await userRepository.update(id, updatedUser)

        const userUpdated = await userRepository.findOneBy({id}) 

        return userUpdated
    }
    
    throw new Error("Just name/email/password can be updated")

}

export default updateUserService