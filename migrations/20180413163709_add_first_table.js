
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('monsters', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('monsters');
};