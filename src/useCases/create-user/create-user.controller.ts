import { Request, Response } from "express"
import { CreateUserUseCase } from "./create-user.usecase";
import { logger } from "../../utils/looger";

class CreateUserController {
  async handle(request: Request, response: Response) {
    
    logger.info("usuário criado");
    
    try {
      const data = request.body
      const createUserUseCase = new CreateUserUseCase();
      const result = await createUserUseCase.execute(data);

      return response.json(result);
    } catch (error: any) {
      logger.error(error.stack)
      return response.status(error.statusCode).json(error.message)
    }
  }
}

export { CreateUserController }