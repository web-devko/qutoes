import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';

import {RegisterDto} from "./dto/register.dto";
import {RegisterUserResponse} from "../interfaces/user";
import {AuthGuard} from "@nestjs/passport";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  checkIsLogged(): boolean {
    return true
  }

  @Post('/register')
  register(
      @Body() newUser: RegisterDto,
  ): Promise<RegisterUserResponse> {
    return this.userService.register(newUser);
  }

}
