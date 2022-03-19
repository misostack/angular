type ID = string | number;
export interface BookmarkDTO {
  id: ID;
  title: string;
  link: string;
}

export interface BookmarkObject {
  id: ID;
  title: string;
  link: string;
  group: {
    id: ID;
    name: string;
  };
}

export interface BookmarkGroupDTO {
  id: ID;
  name: string;
}

export class BookmarkGroup {
  id!: ID;
  name!: string;

  constructor(payload: BookmarkGroupDTO) {
    const { id, name } = payload;
    this.id = id;
    this.name = name;
  }

  public toObject() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}

export class Bookmark {
  id!: ID;
  title!: string;
  link!: string;
  group!: BookmarkGroup;

  constructor(payload: BookmarkDTO, group: BookmarkGroup) {
    const { id, title, link } = payload;
    this.id = id;
    this.title = title;
    this.link = link;
    this.group = group;
  }

  toObject(): BookmarkObject {
    return {
      id: this.id,
      title: this.title,
      link: this.link,
      group: this.group.toObject(),
    };
  }
}
