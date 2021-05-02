import { extendType, objectType } from '@nexus/schema';

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.posts();
  },
});

export const CategoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.category();
    t.crud.categories({
      type: 'Category',
      pagination: true,
      filtering: true,
      ordering: true,
    });
  },
});

export const CategoryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCategory({ alias: 'createCategory' });
    t.crud.updateOneCategory({ alias: 'updateCategory' });
    t.crud.deleteOneCategory({ alias: 'deleteCategory' });
    t.crud.updateManyCategory({ alias: 'updateCategories' });
    t.crud.deleteManyCategory({ alias: 'deleteCategories' });
  },
});
