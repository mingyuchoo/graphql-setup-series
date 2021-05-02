import { objectType } from '@nexus/schema';

export const Office = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Office',
  definition(t) {
    t.string('officeCode');
    t.string('city');
    t.string('phone');
    t.string('addressLine1');
    t.nullable.string('addressLine2');
    t.nullable.string('state');
    t.string('country');
    t.string('postalCode');
    t.string('territory');
    t.list.field('Employee', {
      type: 'Employee',
      args: {
        where: 'EmployeeWhereInput',
        orderBy: 'EmployeeOrderByInput',
        cursor: 'EmployeeWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'EmployeeScalarFieldEnum',
      },
      resolve(root: any) {
        return root.Employee;
      },
    });
  },
});
