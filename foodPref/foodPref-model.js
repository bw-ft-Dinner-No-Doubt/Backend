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
  return db('foodPref').select('spicy', 'vegetarian', 'vegan', 'femaleOwned', 'diner_id');
}

function findBy(filter) {
  return db('foodPref').where(filter);
}

async function add(foodPref) {
  const [id] = await db('foodPref').insert(foodPref);

  return findById(id);
}

function findById(id) {
  return db('foodPref')
    .where({ id })
    .first();
}

function update(changes, id){
  return db('foodPref')
  .where({ id: id })
  .update(changes, id);
}

function remove(id){
  return db('foodPref')
  .where('id', id)
  .del();
}
