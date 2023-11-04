import {Inject, Controller, Get, Query} from '@midwayjs/core';
import {ArticleService} from "../service/Article.service";

@Controller('/article')
export class ArticleController {
  @Inject()
  articleService: ArticleService;

  @Get('/articleDetail')
  async articleDetail(@Query('id') id: string) {
    return await this.articleService.getArticleDetail(parseInt(id));
  }
}
