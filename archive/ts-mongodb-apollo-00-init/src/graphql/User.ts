import { objectType, extendType, stringArg, nonNull, intArg } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id');
    t.string('firstName');
    t.string('lastName');
    t.string('blog');
    t.int('stars');
  },
});

export const PostQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve(_parent, _args, _context, _info) {
        return _context.db.collection('users').find({}).toArray();
      },
    });
  },
});
