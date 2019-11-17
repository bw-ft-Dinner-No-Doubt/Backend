
exports.seed = function(knex) {
      return knex('dinnerWheel').insert([
        {slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '', slot10: '', restaurant_id: 1},
        {slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '', slot10: '', restaurant_id: 1},
        {slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '', slot10: '', restaurant_id: 1},
        {slot1: '', slot2: '', slot3: '', slot4: '', slot5: '', slot6: '', slot7: '', slot8: '', slot9: '', slot10: '', restaurant_id: 1}
      ]);
};
