import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  username: string
  password: string
}

interface Client {
  id: string
  username: string
  password: string
}

class CreateClientService {

  async execute({ username, password }: ICreateClient): Promise<Client> {

    const clientExists = await prisma.client.findFirst({
      where: {
        username: {
          mode: "insensitive"
        }
      }
    })

    if (clientExists) {
      throw new Error("client already exist's")
    }

    const hashPassword = await hash(password, 10)

    const client = await prisma.client.create({
      data: {
        username,
        password: hashPassword,
      }
    })

    return client
  }
}

export { CreateClientService }