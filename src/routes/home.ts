import { Request, Response, Router } from "express";
import HomeController from "../controller/home";

export const Home = Router()

Home.get('', (req: Request, res: Response) => {
  const controller = new HomeController()
  const response = controller.getMessage()

  return res.send(response)
})
