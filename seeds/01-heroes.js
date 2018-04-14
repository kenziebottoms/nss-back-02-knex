
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('heroes').insert([
        {
          id: 1,
          name: 'Jurghen',
          class: 'rogue',
          alive: true
        },
        {
          id: 2,
          name: 'Shift',
          class: 'druid',
          alive: false
        },
        {
          id: 3,
          name: 'Hero',
          class: 'mage',
          alive: true
        }
      ]);
    });
};