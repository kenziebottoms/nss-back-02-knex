
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('battles').del()
    .then(function () {
      // Inserts seed entries
      return knex('battles').insert([
        {
          location: 'Khazad Dum',
          hero_id: 1,
          monster_id: 2
        },
        {
          location: 'Gondor',
          hero_id: 2,
          monster_id: 1
        },
        {
          location: 'Mines of Moria',
          hero_id: 3,
          monster_id: 3
        }
      ]);
    });
};
