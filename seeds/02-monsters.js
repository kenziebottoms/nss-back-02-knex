
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {
          id: 1,
          name: 'demogorgon',
          description: 'sightless, carnivorous, very dangerous'
        },
        {
          id: 2,
          name: 'Calvin',
          description: 'consumes any organic life and becomes much stronger each time'
        },
        {
          id: 3,
          name: 'hippogriff',
          description: 'very proud, and if disrespected very dangerous, but not savage'
        }
      ]);
    });
};
