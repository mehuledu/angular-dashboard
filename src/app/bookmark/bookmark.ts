export class Bookmark {
  subject: string;
  references: Array<Reference>;
  description?: string;
}

export class Reference {
  faviconUrl?: string;
  url: string;
  description?: string;
}
