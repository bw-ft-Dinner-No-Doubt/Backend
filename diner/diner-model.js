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
  return db('diner').select('id', 'username', 'password', 'email', 'streetAddress', 'city', 'state', 'zipcode');
}

function findBy(filter) {
  return db('diner').where(filter);
}

async function add(diner) {
  const [id] = await db('diner').insert(diner);

  return findById(id);
}

function findById(id) {
  return db('diner')
    .where({ id })
    .first();
}

function update(changes, id){
  return db('diner')
  .where({ id: id })
  .update(changes, id);
}

function remove(id){
  return db('diner')
  .where('id', id)
  .del();
}
