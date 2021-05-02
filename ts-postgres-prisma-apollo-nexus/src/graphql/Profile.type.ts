import { extendType, objectType } from '@nexus/schema';

export const Porfile = objectType({
  name: 'Profile',
  definition(t) {
    t.model.id();
    t.model.bio();
    t.model.user();
  },
});

export const ProfileQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.profile();
    t.crud.profiles({
      type: 'Profile',
      pagination: true,
      filtering: true,
      ordering: true,
    });
  },
});

export const ProfileMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneProfile({ alias: 'createProfile' });
    t.crud.updateOneProfile({ alias: 'updateProfile' });
    t.crud.deleteOneProfile({ alias: 'deleteProfile' });
    t.crud.updateManyProfile({ alias: 'updateProfiles' });
    t.crud.deleteManyProfile({ alias: 'deleteProfiles' });
  },
});
