
exports.seed = function(knex) {
      return knex('table_name').insert([
        {name: '', diner_id: 1},
        {name: '', diner_id: 1},
        {name: '', diner_id: 1},
        {name: '', diner_id: 1},
        {name: '', diner_id: 1},
        {name: '', diner_id: 1},
        {name: '', diner_id: 1}
      ]);
};
