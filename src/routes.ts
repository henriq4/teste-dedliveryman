import { Router } from "express";
import { CreateClientController } from "./modules/client/useCases/CreateClient/CreateClientController";

const routes = Router()

const createClientController = new CreateClientController()

routes.post('/client', (request, response) => {
  createClientController.handle(request, response)
})

export { routes }