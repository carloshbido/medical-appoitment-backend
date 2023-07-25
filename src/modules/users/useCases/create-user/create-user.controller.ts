import { Request, Response } from "express"
import { CreateUserUseCase } from "./create-user.usecase";
import { logger } from "../../../../utils/looger";
import { IUserRepository } from "../../repositories/user.repository";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";

class CreateUserController {

  constructor(private userRepository: IUserRepository, private passwordCrypto: IPasswordCrypto) {}

  async handle(request: Request, response: Response) {  
    try {
      const data = request.body
      const createUserUseCase = new CreateUserUseCase(this.userRepository, this.passwordCrypto);
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