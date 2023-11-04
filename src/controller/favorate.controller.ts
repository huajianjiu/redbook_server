import {Inject, Controller, Get} from '@midwayjs/core';
import {FavorateService} from "../service/favorate.service";

@Controller('/mine')
export class FavorateController {
  @Inject()
  favorateService: FavorateService;

  @Get('/noteList')
  async noteList() {
    return [];
  }

  @Get('/collectionList')
  async collectionList() {
    return [];
  }

  @Get('favorateList')
  async favorateList() {
    return await this.favorateService.getFavorateList();
  }

  @Get('accountInfo')
  async accountInfo() {
    return await this.favorateService.getAccountInfo();
  }
}
