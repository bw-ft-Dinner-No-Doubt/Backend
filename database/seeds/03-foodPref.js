
exports.seed = function(knex) {
      return knex('foodPref').insert([
        {spicy: true, vegetarian: false, vegan: true, femaleOwned: false, diner_id: 1},
        {spicy: false, vegetarian: true, vegan: false, femaleOwned: true, diner_id: 2},
        {spicy: false, vegetarian: false, vegan: false, femaleOwned: false, diner_id: 3},
        {spicy: true, vegetarian: true, vegan: false, femaleOwned: false, diner_id: 4},
      ]);
};
