import {Inject, Controller, Get, Query} from '@midwayjs/core';
import {FollowService} from "../service/follow.service";

@Controller('/follow')
export class FollowController {
  @Inject()
  followService: FollowService;

  @Get('/articleList')
  async articleList(@Query('page') page: string, @Query('size') size: string) {
    return await this.followService.getArticleList(parseInt(page), parseInt(size));
  }
}
