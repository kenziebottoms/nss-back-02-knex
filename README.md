## Using Knex for migrations

### Migrations

Have you noticed yet how wonderful Github is? And have you also noticed how difficult it is to track your database in github? Migrations to the rescue! Migrations allow us to create our databases and then track changes to the database structure in our javascript files.

According to [Wikipedia](https://en.wikipedia.org/wiki/Schema_migration), "A schema migration is performed on a database whenever it is necessary to update or revert that database's schema to some newer or older version. Migrations are performed programmatically by using a schema migration tool." A schema indicates which tables or relations make up the database, as well as the fields included on each table.

In order use migrations with Knex, you need to install Knex globally.

```bash
npm install knex -g
```

Since this is a global install, you will only need to so once. Like our dear friend, `npm`, you will need to `knex init` to create a `knexfile.js`. The `knexfile` will connect our app to our database and will specify any settings we want to use. The `knexfile` assumes three different environments for your app: testing, development, and production. We will primarily be working with testing and development. Why use a different environment for testing? Well, this way we can have a separate database for testing so that our tests always run the way we expect (i.e., no users enter extra data between the time we write our tests and when we run them).

After that, you can create migrations, run migrations, and rollback migrations.

```bash
knex migrate:make migration_name
knex migrate:latest
knex migrate:rollback
```

So, what does all that stuff *mean*? 

#### Creating a migration

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

## Exercise

Let's create a database, fill it with useful tables, and then knock the whole thing down again.

First create a directory for your knex sand castle and `cd` into it

```bash
mkdir knex-sandcastle && cd $_
npm init -y
npm install --save pg knex`
```

Using your psql console,
```bash
psql
CREATE DATABASE sandcastledb;
```
HINT: don't forget the ";" at the end of the statement, and avoid capital letters.

```bash
knex init
```

Update your `knexfile.js` to use your sandcastledb.

```bash
knex migrate:make add_first_table
```
Put a table in the `exports.up`, and then drop the table in `exports.down`. What kind of table? How about some monsters (monsters like attacking castles). Monsters have names, unique IDs, and any other descriptive columns you feel like adding.

Now run `knex migrate:latest` and check to see if your "monsters" table has been added to your database using pgAdmin or your psql terminal.

It looks awesome? Let's get rid of it! `knex migrate:rollback` and check to make sure that table is gone.

All done!

Just kidding... 

Try it again. Make another migration to add a second table to your database. How about some heroes to fight off those monsters? Run `knex migrate:latest` and `knex migrate:rollback` a couple of time to see how the two different migration intereact with each other and the databse.

***Important:*** whenever you make a change to your database, you can `migrate:latest`, you can `migrate:rollback`, or you can `migrate:make new_migration`. Do not change a migration file that has already been made, or you will be sad 😢.

### Bonus
- [x] Create another migration that adds a new column to your hero table
- [ ] Create yet another migration that adds a weapons table to your database. The weapons should have names and should have a many to many relationship with your heroes.