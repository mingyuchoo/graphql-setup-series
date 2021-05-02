import { objectType } from '@nexus/schema';

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id');
    t.field('createdAt', { type: 'DateTime' });
    t.string('email');
    t.nullable.string('name');
    t.string('password');
    t.list.field('posts', {
      type: 'Post',
      args: {
        where: 'PostWhereInput',
        orderBy: 'PostOrderByInput',
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PostScalarFieldEnum',
      },
      resolve(root: any) {
        return root.posts;
      },
    });
    t.nullable.field('profile', {
      type: 'Profile',
      resolve(root: any) {
        return root.profile;
      },
    });
    t.nullable.field('group', {
      type: 'Group',
      resolve(root: any) {
        return root.group;
      },
    });
    t.nullable.int('groupId');
    t.list.field('comments', {
      type: 'Comment',
      args: {
        where: 'CommentWhereInput',
        orderBy: 'CommentOrderByInput',
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CommentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.comments;
      },
    });
  },
});
