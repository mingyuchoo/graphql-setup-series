import { objectType } from '@nexus/schema';

export const Employee = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Employee',
  definition(t) {
    t.int('employeeNumber');
    t.string('lastName');
    t.string('firstName');
    t.string('extension');
    t.string('email');
    t.string('officeCode');
    t.nullable.int('reportsTo');
    t.string('jobTitle');
    t.field('Office', {
      type: 'Office',
      resolve(root: any) {
        return root.Office;
      },
    });
    t.nullable.field('Employee', {
      type: 'Employee',
      resolve(root: any) {
        return root.Employee;
      },
    });
    t.list.field('Customer', {
      type: 'Customer',
      args: {
        where: 'CustomerWhereInput',
        orderBy: 'CustomerOrderByInput',
        cursor: 'CustomerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CustomerScalarFieldEnum',
      },
      resolve(root: any) {
        return root.Customer;
      },
    });
    t.list.field('other_employees', {
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
        return root.other_employees;
      },
    });
  },
});
