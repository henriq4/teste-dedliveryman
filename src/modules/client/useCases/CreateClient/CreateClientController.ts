import { Request, Response } from "express";
import { CreateClientService } from "./CreateClientService";

class CreateClientController {

  handle(request: Request, response: Response) {
    const { username, password } = request.body

    const createClientService = new CreateClientService()

    const client = createClientService.execute({ username, password })

    return response.status(200).json(client)
  }
}

export { CreateClientController }