
exports.seed = function(knex) {
      return knex('restaurant').insert([
        {name: 'China Taste', category: 'Chinese', recentHistory: true},
        {name: 'Tortilleria La Mexicana', category: 'Mexican', recentHistory: false},
        {name: 'Cafe Positano', category: 'Italian', recentHistory: true},
        {name: 'Gators Dockside Hunt Club', category: 'American', recentHistory: false}
      ]);
};
