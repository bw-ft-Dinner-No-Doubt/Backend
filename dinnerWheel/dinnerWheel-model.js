const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db('dinnerWheel').select('slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9', 'slot10', 'restaurant_id');
}

function findBy(filter) {
  return db('dinnerWheel').where(filter);
}

async function add(dinnerWheel) {
  const [id] = await db('dinnerWheel').insert(dinnerWheel);

  return findById(id);
}

function findById(id) {
  return db('dinnerWheel')
    .where({ id })
    .first();
}

function update(changes, id){
  return db('dinnerWheel')
  .where({ id: id })
  .update(changes, id);
}

function remove(id){
  return db('dinnerWheel')
  .where('id', id)
  .del();
}
