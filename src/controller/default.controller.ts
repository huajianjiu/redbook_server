import {Inject, Controller, Get} from '@midwayjs/core';
import {DefaultService} from "../service/default.service";

@Controller('/')
export class UserController {
  @Inject()
  defaultService: DefaultService;

  @Get('/')
  async getDefault() {
    return await this.defaultService.getDefault()
  }
}
