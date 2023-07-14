import { User } from "../../entities/user.entity"
import { ParameterRequiredError } from "../../errors/parameter-required.error"
import { UserRepository } from "../../repositories/user.repository"

type UserRequest = {
  name: string,
  password: string
  username: string,
}

export class CreateUserUseCase {

  async execute(data: UserRequest) {
    const userRepository = UserRepository.getInstance()
    const user = User.create(data);
  
    if(!data.username || !data.password || !data.name) throw new ParameterRequiredError("Username/password is required", 422)

    const existUser = await userRepository.findByUserName(data.username)
    console.log(existUser)

    if(existUser) throw new ParameterRequiredError("Username doesn't exists", 404)
    
    const userCreated = await userRepository.save(user);
    return userCreated
  }
}