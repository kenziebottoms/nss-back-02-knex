
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {
          name: 'demogorgon',
          description: 'sightless, carnivorous, very dangerous'
        },
        {
          name: 'Calvin',
          description: 'consumes any organic life and becomes much stronger each time'
        },
        {
          name: 'hippogriff',
          description: 'very proud, and if disrespected very dangerous, but not savage'
        }
      ]);
    });
};
