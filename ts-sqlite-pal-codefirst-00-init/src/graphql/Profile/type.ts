import { objectType } from 'nexus';

export const Profile = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Profile',
  definition(t) {
    t.field('author', {
      type: 'User',
      resolve(root: any) {
        return root.author;
      },
    });
    t.int('authorId');
    t.string('bio');
  },
});
