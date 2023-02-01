import { BaseEntity, Entity, ManyToMany, PrimaryColumn } from 'typeorm';

import { Post } from './index';

@Entity({ name: 'tag' })
export class Tag extends BaseEntity {
  @PrimaryColumn()
  name!: string;

  @ManyToMany((type) => Post, (post) => post.tags)
  posts?: Post[];
}
