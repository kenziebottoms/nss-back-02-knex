
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('heroes', t => {
      t.increments('id').primary();
      t.string('name').notNullable();
      t.string('class');
      t.boolean('alive');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('heroes');
};
