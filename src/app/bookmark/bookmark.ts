export class Bookmark {
  faviconUrl?: string;
  url: string;
  description?: string;
  subject?: string;
}

export class Book {
  tags: Array<string>;
  bookmarks : Array<Bookmark>;
}