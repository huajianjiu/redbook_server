import {UserService} from '../service/user.service';
import {Inject, Controller, Get, Query} from '@midwayjs/core';
import {Context} from '@midwayjs/koa';

@Controller('/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/login')
  async getUser(@Query('name') name: string, @Query('pwd') pwd: string) {
    return await this.userService.getLoginUserInfo(name, pwd)
  }
}
