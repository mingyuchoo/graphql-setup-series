import { objectType } from '@nexus/schema';

export const OrderDetail = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'OrderDetail',
  definition(t) {
    t.int('orderNumber');
    t.string('productCode');
    t.int('quantityOrdered');
    t.float('priceEach');
    t.int('orderLineNumber');
    t.field('Order', {
      type: 'Order',
      resolve(root: any) {
        return root.Order;
      },
    });
    t.field('Product', {
      type: 'Product',
      resolve(root: any) {
        return root.Product;
      },
    });
  },
});
