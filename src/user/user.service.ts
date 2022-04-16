import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import bcrypt from 'bcrypt';

import { Model} from 'mongoose'
import { User } from '../schemas/user.schema';
import { RegisterUserDTO } from './dto/registerUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async register(registerUser: RegisterUserDTO): Promise<User> {
    const user = await this.userModel.findOne({ email: registerUser.email });

    if (user) {
      return Promise.reject({
        code: 422,
        message: "Email already exists"
      })
    }
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(registerUser.password, salt);
    const newUser = await this.userModel.create({ ...registerUser, password });
    return newUser.save();

  }
}