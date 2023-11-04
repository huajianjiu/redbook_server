/**
 * @description parameters
 */
export interface Article {
  id: number;
  title: string;
  desc: string;
  tag: string[];
  dateTime: string;
  location: string;
  userId: number;
  userName: string;
  isFollow: boolean;
  avatarUrl: string;
  images: string[];
  favoriteCount: number;
  collectionCount: number;
  isFavorite: boolean;
  isCollection: boolean;
  comments?: ArticleComment[];
  commentCount?: number;
}

export interface ArticleComment {
    userName: string;
    avatarUrl: string;
    message: string;
    dateTime: string;
    location: string;
    favoriteCount: number;
    isFavorite: boolean;
    children?: ArticleComment[];
}

export interface Article {
    id: number;
    title: string;
    desc: string;
    tag: string[];
    dateTime: string;
    location: string;
    userId: number;
    userName: string;
    isFollow: boolean;
    avatarUrl: string;
    images: string[];
    favoriteCount: number;
    collectionCount: number;
    isFavorite: boolean;
    isCollection: boolean;
    comments?: ArticleComment[];
    commentCount?: number;
}

export interface ArticleSimple {
    id: number;
    title: string;
    userName: string;
    avatarUrl: string;
    favoriteCount: number;
    isFavorite: boolean;
    image: string;
}

export interface GoodsSimple {
    id: number;
    title: string;
    image: string;
    price: number;
    originPrice: number | undefined;
    promotion: string | undefined;
}

export interface Category {
    id: number;
    name: string;
    image: string;
}

export interface MessageListItem {
    id: number;
    name: any;
    avatarUrl: string;
    lastMessage?: string;
    lastMessageTime?: string;
}
