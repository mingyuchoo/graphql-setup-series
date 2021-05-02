import { objectType } from '@nexus/schema';

export const Payment = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Payment',
  definition(t) {
    t.int('customerNumber');
    t.string('checkNumber');
    t.field('paymentDate', { type: 'DateTime' });
    t.float('amount');
    t.field('Customer', {
      type: 'Customer',
      resolve(root: any) {
        return root.Customer;
      },
    });
  },
});
