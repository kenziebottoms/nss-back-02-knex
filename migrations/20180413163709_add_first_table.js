
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('monsters', t => {
      t.increments('id').primary();
      t.string('name').notNullable();
      t.text('description');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('monsters');
};