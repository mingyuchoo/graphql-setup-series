import { profile } from 'console';
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post, Profile } from './index';

enum Role {
  USER,
  ADMIN,
}

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column('int')
  role!: Role;

  @OneToOne((type) => Profile, (profile) => profile.user)
  @JoinColumn()
  profile?: Profile;

  @OneToMany((type) => Post, (post) => post.author)
  posts?: Post[];
}
