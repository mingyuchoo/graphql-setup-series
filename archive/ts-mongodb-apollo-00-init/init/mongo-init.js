db.auth('root', 'root');
db.createUser({
  user: 'admin',
  pwd: 'admin',
  roles: ['readWriteAnyDatabase'],
});
db = db.getSiblingDB('test');
db.createUser({
  user: 'test',
  pwd: 'test',
  roles: ['dbOwner'],
});
