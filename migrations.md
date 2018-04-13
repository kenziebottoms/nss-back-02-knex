## Migrations

Have you noticed yet how wonderful Github is? And have you also noticed how difficult it is to track your database in github? Migrations to the rescue! Migrations allow us to create our databases and then track changes to the database structure in our javascript files.

In order use migrations with Knex, you need to install Knex globally.

```bash
npm install knex -g
```

Since this is a global install, you will only need to so once. Like our dear friend, `npm`, you will need to `knex init` to create a `knexfile.js`. The `knexfile` will connect our app to our database and will specify any settings we want to use. The `knexfile` assumes three different environments for your app: testing, development, and production. After that, you can create migrations, run migrations, and rollback migrations.

```bash
knex migrate:make migration_name
knex migrate:latest
knex migrate:rollback
```

So, what does all that stuff *mean*? 

### Creating a migration

Unlike other files in your project, knex will create your migration files for  you. Knex is very hepful and creates the migrations file with the name you specify in `knex migration:make migration_name` along with a timestamp. Knex will even go one step farther, and create a `db/migrations` directory for your migration files.

The migration file Knex creates for you includes two empty functions.
Looks like this:

```js
exports.up = function(knex, Promise) {
  
};

exports.down = function(knex, Promise) {
  
};
```
Migrations are pretty awesome because they run two ways. Each migration you write should do something (in `exports.up`) that will run when you run your migrations, and also UNDO that same thing (in `exports.down`) that will run when you rollback your migration.

For example, I could create a simple table in my `exports.up` like so:
```js
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('monsters', function(table){
      table.increments('monster_id').primary();
      table.string('monster_name').notNullable();
    });
};
```

and then my `exports.down` would look like so:
```js
exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('monsters')
};
```

When I run `knex migrate:latest`, a monsters table is added to my database, and then when I run `knex migrate:rollback`, that table is removed from my database.

By tracking the changes of my migration files in Github, I can keep track of the changes I've made to my database over time.