import {Inject, Controller, Get, Query} from '@midwayjs/core';
import {GoodsService} from "../service/goods.service";

@Controller('/goods')
export class GoodsController {
  @Inject()
  goodsService: GoodsService;

  @Get('/goodsList')
  async goodsList(@Query('page') page: string, @Query('size') size: string) {
    return await this.goodsService.getGoodsList(parseInt(page), parseInt(size));
  }

  @Get('/top10Category')
  async top10Category() {
    return await this.goodsService.getTop10Category();
  }
}
