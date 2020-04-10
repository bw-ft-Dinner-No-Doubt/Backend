
exports.seed = function(knex) {
      return knex('dinnerWheel').insert([
        {slot1: 'random', slot2: 'random', slot3: 'random', slot4: 'random', slot5: 'random', slot6: 'random', slot7: 'random', slot8: 'random', slot9: 'random', slot10: 'random', restaurant_id: 1},
        {slot1: 'random', slot2: 'random', slot3: 'random', slot4: 'random', slot5: 'random', slot6: 'random', slot7: 'random', slot8: 'random', slot9: 'random', slot10: 'random', restaurant_id: 2},
        {slot1: 'random', slot2: 'random', slot3: 'random', slot4: 'random', slot5: 'random', slot6: 'random', slot7: 'random', slot8: 'random', slot9: 'random', slot10: 'random', restaurant_id: 3},
        {slot1: 'random', slot2: 'random', slot3: 'random', slot4: 'random', slot5: 'random', slot6: 'random', slot7: 'random', slot8: 'random', slot9: 'random', slot10: 'random', restaurant_id: 4}
      ]);
};
