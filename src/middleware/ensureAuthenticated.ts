import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/account/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}


export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers.authorization

    if(!authHeader) {
        throw new Error("Token missing")
    }

    const [, token] = authHeader.split(" ")

    try {
      const { sub: user_id } = verify(token, "41a4414f629e3f38c4cf9fe4e92f352b") as IPayload

      const usersRepository = new UsersRepository()
      const user = await usersRepository.findById(user_id)

      if(!user) {
        throw new Error("User not exist")
      }

      next()
    } catch {
        throw new Error("Invalid token!")
    }


}