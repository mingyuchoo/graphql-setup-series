import { extendType, objectType } from '@nexus/schema';

export const Tag = objectType({
  name: 'Tag',
  definition(t) {
    t.model.name();
  },
});

export const TagQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tag();
    t.crud.tags({
      type: 'Tag',
      pagination: true,
      filtering: true,
      ordering: true,
    });
  },
});

export const TagMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneTag({ alias: 'createTag' });
    t.crud.updateOneTag({ alias: 'updateTag' });
    t.crud.deleteOneTag({ alias: 'deleteTag' });
    t.crud.updateManyTag({ alias: 'updateTags' });
    t.crud.deleteManyTag({ alias: 'deleteTags' });
  },
});
