
exports.seed = function(knex) {
      return knex('platformPref').insert([
        {name: 'GrubHub', diner_id: 1},
        {name: 'UberEats', diner_id: 2},
        {name: 'DoorDash', diner_id: 3},
        {name: 'PostMates', diner_id: 4},
      ]);
};
