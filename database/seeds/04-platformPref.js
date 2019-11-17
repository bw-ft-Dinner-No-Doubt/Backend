
exports.seed = function(knex) {
      return knex('platformPref').insert([
        {name: '', diner_id: 1},
        {name: '', diner_id: 1},
        {name: '', diner_id: 1},
        {name: '', diner_id: 1},
        {name: '', diner_id: 1},
        {name: '', diner_id: 1},
        {name: '', diner_id: 1}
      ]);
};
