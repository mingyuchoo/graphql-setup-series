import { objectType } from '@nexus/schema';

export const Product = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Product',
  definition(t) {
    t.string('productCode');
    t.string('productName');
    t.string('productLine');
    t.string('productScale');
    t.string('productVendor');
    t.string('productDescription');
    t.int('quantityInStock');
    t.float('buyPrice');
    t.float('MSRP');
    t.field('ProductLine', {
      type: 'ProductLine',
      resolve(root: any) {
        return root.ProductLine;
      },
    });
    t.list.field('OrderDetail', {
      type: 'OrderDetail',
      args: {
        where: 'OrderDetailWhereInput',
        orderBy: 'OrderDetailOrderByInput',
        cursor: 'OrderDetailWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OrderDetailScalarFieldEnum',
      },
      resolve(root: any) {
        return root.OrderDetail;
      },
    });
  },
});
