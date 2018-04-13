
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('weapons', t => {
      t.increments('id').primary();
      t.string('name').notNullable();
      t.integer('owner_id');
      t.foreign('owner_id').references('id').inTable('heroes');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('weapons');
};
