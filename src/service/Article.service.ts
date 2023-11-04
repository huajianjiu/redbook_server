import {Config, Provide} from '@midwayjs/core';
import {sleep} from '../utils/Sleep';
import articles from "../db/articles";

@Provide()
export class ArticleService {
  @Config("host")
  host: string;

  // 文章详情
  async getArticleDetail(id: number): Promise<Article> {
    await sleep(1000);
    const find: Article | undefined = articles.find(i => i.id === id);
    if (!find) {
      return {} as Article;
    }
    const article = JSON.parse(JSON.stringify(find))
    article.avatarUrl = `http://${this.host}/public${find.avatarUrl}`;
    article.images = article.images.map(i => `http://${this.host}/public${i}`);
    article.comments = article.comments ? article.comments.map(i => {
      return {
        ...i,
        avatarUrl: `http://${this.host}/public${i.avatarUrl}`
      } as ArticleComment;
    }) : [];
    if (article?.comments[0]?.children) {
      const firstCommentChildren = [...article.comments[0].children];
      if (firstCommentChildren?.length) {
        const copySubFirst = firstCommentChildren[0];
        copySubFirst.avatarUrl = `http://${this.host}/public${copySubFirst.avatarUrl}`;
        firstCommentChildren[0] = copySubFirst;
      }
      article.comments[0].children = firstCommentChildren;
    }
    return article;
  }
}
