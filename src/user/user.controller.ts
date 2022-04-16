import { Controller, Post, Body } from "@nestjs/common";
import { User } from "../schemas/user.schema";
import { RegisterUserDTO } from "./dto/registerUser.dto";
import { UserService } from "./user.service";


@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async registerUser(
    @Body() registerUserDTO: RegisterUserDTO
  ): Promise<User> {
    try {
      const user = await this.userService.register(registerUserDTO);
      return user;
    } catch (err) {
      return err;
    }
  }
}
