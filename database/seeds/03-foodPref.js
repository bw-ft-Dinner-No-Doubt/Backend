
exports.seed = function(knex) {
      return knex('table_name').insert([
        {spicy: false, vegetarian: false, vegan: false, femaleOwned: false, diner_id: 1},
        {spicy: false, vegetarian: false, vegan: false, femaleOwned: false, diner_id: 1},
        {spicy: false, vegetarian: false, vegan: false, femaleOwned: false, diner_id: 1},
        {spicy: false, vegetarian: false, vegan: false, femaleOwned: false, diner_id: 1},
        {spicy: false, vegetarian: false, vegan: false, femaleOwned: false, diner_id: 1},
        {spicy: false, vegetarian: false, vegan: false, femaleOwned: false, diner_id: 1}
      ]);
};
