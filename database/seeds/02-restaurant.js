
exports.seed = function(knex) {
      return knex('restaurant').insert([
        {name: '', category: '', recentHistory: false},
        {name: '', category: '', recentHistory: false},
        {name: '', category: '', recentHistory: false},
        {name: '', category: '', recentHistory: false}
      ]);
};
