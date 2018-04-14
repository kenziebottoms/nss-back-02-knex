
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weapons').del()
    .then(function () {
      // Inserts seed entries
      return knex('weapons').insert([
        {
          id: 1,
          name: 'Flaming sword'
        },
        {
          id: 2,
          name: 'Salmonella-bearing hamburger'
        },
        {
          id: 3,
          name: 'Tripwire'
        }
      ]);
    });
};
