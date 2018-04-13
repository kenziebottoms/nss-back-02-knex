## Seeding

You've seeded data before, but knex is going to make the process much easier.

Just like migrations, creating seed files with knex requires the knex cli to be installed globally. And, similar to migrations, you can create a seed file by running `knex seed:make name_of_seed`

Knex will create a seed file for you that looks like this:
```js
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
```
Pretty self-explanitory. However, it is not a good idea to explicitly insert your primary keys. Knex and bookshelf might not realize you've used those ids already and throw a duplicatae key error.

Unike the migration files, the seed files do not contain any type of time stamp in the file name. Every time you seed your database (`knex seed:run`) ALL of your seed files will run in alphabetic order. When working with foreign key relationships, you will want to make sure that your seed fields are named appropriately so that tables that do not require foreign keys get seeded first, and the tables that rely on them are seeded afterward.