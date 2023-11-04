import {Config, Provide} from '@midwayjs/core';
import {sleep} from '../utils/Sleep';
import articles from "../db/articles";

@Provide()
export class FollowService {
  @Config("host")
  host: string;

  // 关注文章列表
  async getArticleList(page: number, size: number): Promise<Article[]> {
    await sleep(2000);
    if (size !== 10) {
      size = 10;
    }
    if (page === 1) {
      const sub = articles.slice(0, 10);
      return sub.map(item => {
        const images = item.images.map(i => `http://${this.host}/public${i}`);
        return {
          id: item.id,
          avatarUrl: `http://${this.host}/public${item.avatarUrl}`,
          userName: item.userName,
          dateTime: item.dateTime,
          images: images,
          title: item.title,
          desc: item.desc,
          favoriteCount: item.favoriteCount,
          isFavorite: item.isFavorite,
          collectionCount: item.collectionCount,
          isCollection: item.isCollection,
          commentCount: item.comments?.length,
        } as Article;
      })
    } else if (page === 2) {
      const sub = articles.slice(10, 20);
      return sub.map(item => {
        const images = item.images.map(i => `http://${this.host}/public${i}`);
        return {
          id: item.id,
          avatarUrl: `http://${this.host}/public${item.avatarUrl}`,
          userName: item.userName,
          dateTime: item.dateTime,
          images: images,
          title: item.title,
          desc: item.desc,
          favoriteCount: item.favoriteCount,
          isFavorite: item.isFavorite,
          collectionCount: item.collectionCount,
          isCollection: item.isCollection,
          commentCount: item.comments?.length,
        } as Article;
      })
    } else {
      return [];
    }
  }
}
