import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entity"

const deleteUserService = async (id:string): Promise <void | Array<string | number>> => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const user = users.find(user => user.id === id)
 
    if(!user){
        return ['User not found', 404]
    }

    if(user.isActive === true){
        await userRepository.update(id, {isActive: false})
    }else{
        throw new Error ('User is disabled')
    }
}

export default deleteUserService