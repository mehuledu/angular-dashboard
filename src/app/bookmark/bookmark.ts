export class Bookmark {
  subject: string;
  references: Array<reference>;
  description?: string;
}

export class reference {
  url: string;
  description?: string;
}
