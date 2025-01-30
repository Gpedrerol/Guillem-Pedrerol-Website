interface UnsplashCredit {
  name: string;
  username: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  slug: string;
  coverImage: string;
  unsplashCredit: UnsplashCredit | null;
  tags: string[];
}
