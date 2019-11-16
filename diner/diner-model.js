const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('diner').select('id', 'username', 'password');
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
