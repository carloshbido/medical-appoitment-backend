import { Request, Response } from "express"
import { CreateUserUseCase } from "./create-user.usecase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const data = request.body
      const createUserUseCase = new CreateUserUseCase();
      const result = await createUserUseCase.execute(data);

      return response.json(result);
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }
}

export { CreateUserController }