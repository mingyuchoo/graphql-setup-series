import { objectType } from '@nexus/schema';

export const ProductLine = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ProductLine',
  definition(t) {
    t.string('productLine');
    t.nullable.string('textDescription');
    t.nullable.string('htmlDescription');
    t.nullable.string('image');
    t.list.field('Product', {
      type: 'Product',
      args: {
        where: 'ProductWhereInput',
        orderBy: 'ProductOrderByInput',
        cursor: 'ProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProductScalarFieldEnum',
      },
      resolve(root: any) {
        return root.Product;
      },
    });
  },
});
