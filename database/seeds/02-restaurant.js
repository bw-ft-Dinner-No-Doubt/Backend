
exports.seed = function(knex) {
      return knex('table_name').insert([
        {name: '', category: '', recentHistory: false},
        {name: '', category: '', recentHistory: false},
        {name: '', category: '', recentHistory: false},
        {name: '', category: '', recentHistory: false}
      ]);
};
