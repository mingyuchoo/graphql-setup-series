import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category, Comment, User, Tag } from './index';

@Entity({ name: 'post' })
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  createdAt!: string;

  @Column()
  title!: string;

  @Column()
  content?: string;

  @Column()
  published!: string;

  @ManyToOne((type) => User, (author) => author.posts)
  author!: User;

  @ManyToMany((type) => Category, (category) => category.posts)
  @JoinTable({ name: 'post_category_mapper' })
  categories?: Category[];

  @OneToMany((type) => Comment, (comment) => comment.post)
  comments?: Comment[];

  @ManyToMany((type) => Tag, (tag) => tag.posts)
  @JoinTable({ name: 'post_tag_mapper' })
  tags?: Tag[];
}
