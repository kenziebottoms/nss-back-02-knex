# Using Knex

## Part 1: [Migrations](migrations.md)

### Requirements

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
- [x] Create yet another migration that adds a weapons table to your database. The weapons should have names and should have a many to many relationship with your heroes.

## Part 2: [Seeding](seeding.md)

Remember that sandcastle database we made in the previous exercise? Go ahead and run those migrations so that our tables exist, and let's seed them with data.

- [x] Create a seed file for your monsters and add at least three monsters to your database.
- [x] Create a new seed file for  your heros and add those guys to the databse.
- [x] Confirm your seeded data has made it into the database by checking pgAdmin or psql.
- [ ] Create a new table called "battles" that includes a unique id, a location, a hero id (foreign key), and a monster id(foreign key). 
- [ ] Create and run a seed file to seed your new battles table.
- [ ] Have fun storming the castle.

### Bonus
- [ ] Seed your weapons table.