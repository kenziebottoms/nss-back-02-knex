
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('battles', t => {
      t.increments('id').primary();
      t.text('location');
      t.timestamps();
      t.integer('hero_id').references('id').inTable('heroes');
      t.integer('monster_id').references('id').inTable('monsters');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('battles');
};
