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
  return db('restaurant').select('name', 'category', 'recentHistory');
}

function findBy(filter) {
  return db('restaurant').where(filter);
}

async function add(restaurant) {
  const [id] = await db('restaurant').insert(restaurant);

  return findById(id);
}

function findById(id) {
  return db('restaurant')
    .where({ id })
    .first();
}

function update(changes, id){
  return db('restaurant')
  .where({ id: id })
  .update(changes, id);
}

function remove(id){
  return db('restaurant')
  .where('id', id)
  .del();
}
