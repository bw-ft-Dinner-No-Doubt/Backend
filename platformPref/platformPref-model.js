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
  return db('platformPref').select('name', 'diner_id');
}

function findBy(filter) {
  return db('platformPref').where(filter);
}

async function add(platformPref) {
  const [id] = await db('platformPref').insert(platformPref);

  return findById(id);
}

function findById(id) {
  return db('platformPref')
    .where({ id })
    .first();
}

function update(changes, id){
  return db('platformPref')
  .where({ id: id })
  .update(changes, id);
}

function remove(id){
  return db('platformPref')
  .where('id', id)
  .del();
}
