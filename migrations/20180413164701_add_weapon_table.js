
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable('weapons', t => {
        t.increments('id').primary();
        t.string('name').notNullable();
      }),
    knex.schema
      .createTable('armory', t => {
        t.increments('id').primary();
        t.integer('owner_id').references('id').inTable('heroes');
        t.integer('weapon_id').references('id').inTable('weapons');
      })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('armory'),
    knex.schema.dropTable('weapons')
  ]);
};
