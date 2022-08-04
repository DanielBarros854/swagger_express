import { Get, Route } from "tsoa"

interface HomeResponseInterface {
  message: string
}

@Route('')
export default class HomeController {
  @Get('/')
  public getMessage(): HomeResponseInterface {
    return {
      message: 'Server is running'
    }
  }
}
