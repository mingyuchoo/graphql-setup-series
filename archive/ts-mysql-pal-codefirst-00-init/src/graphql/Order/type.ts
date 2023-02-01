import { objectType } from '@nexus/schema';

export const Order = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Order',
  definition(t) {
    t.int('orderNumber');
    t.field('orderDate', { type: 'DateTime' });
    t.field('requiredDate', { type: 'DateTime' });
    t.nullable.field('shippedDate', { type: 'DateTime' });
    t.string('status');
    t.nullable.string('comments');
    t.int('customerNumber');
    t.field('Customer', {
      type: 'Customer',
      resolve(root: any) {
        return root.Customer;
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
