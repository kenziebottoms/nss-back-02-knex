
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('heroes').insert([
        {
          name: 'Jurghen',
          class: 'rogue',
          alive: true
        },
        {
          name: 'Shift',
          class: 'druid',
          alive: false
        },
        {
          name: 'Hero',
          class: 'mage',
          alive: true
        }
      ]);
    });
};