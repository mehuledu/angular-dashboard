export class Bookmark {
  subject: string;
  references: Array<reference>;
  description?: string;
}

export class reference {
  faviconUrl?: string;
  url: string;
  description?: string;
}
