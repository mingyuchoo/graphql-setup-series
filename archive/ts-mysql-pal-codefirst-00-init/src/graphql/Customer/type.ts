import { objectType } from '@nexus/schema';

export const Customer = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Customer',
  definition(t) {
    t.int('customerNumber');
    t.string('customerName');
    t.string('contactLastName');
    t.string('contactFirstName');
    t.string('phone');
    t.string('addressLine1');
    t.nullable.string('addressLine2');
    t.string('city');
    t.nullable.string('state');
    t.nullable.string('postalCode');
    t.string('country');
    t.nullable.int('salesRepEmployeeNumber');
    t.nullable.float('creditLimit');
    t.nullable.field('Employee', {
      type: 'Employee',
      resolve(root: any) {
        return root.Employee;
      },
    });
    t.list.field('Order', {
      type: 'Order',
      args: {
        where: 'OrderWhereInput',
        orderBy: 'OrderOrderByInput',
        cursor: 'OrderWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OrderScalarFieldEnum',
      },
      resolve(root: any) {
        return root.Order;
      },
    });
    t.list.field('Payment', {
      type: 'Payment',
      args: {
        where: 'PaymentWhereInput',
        orderBy: 'PaymentOrderByInput',
        cursor: 'PaymentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PaymentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.Payment;
      },
    });
  },
});
