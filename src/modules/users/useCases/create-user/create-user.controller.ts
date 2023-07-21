import { Request, Response } from "express"
import { CreateUserUseCase } from "./create-user.usecase";
import { logger } from "../../../../utils/looger";
import { IUserRepository } from "../../repositories/user.repository";

class CreateUserController {

  constructor(private userRepository: IUserRepository) {}

  async handle(request: Request, response: Response) {  
    try {
      const data = request.body
      const createUserUseCase = new CreateUserUseCase(this.userRepository);
      const result = await createUserUseCase.execute(data);

      logger.info("User Created")
      return response.json(result);
    } catch (error: any) {
      logger.error(error.stack)
      return response.status(error.statusCode).json({ error: error.message })
    }
  }
}

export { CreateUserController }