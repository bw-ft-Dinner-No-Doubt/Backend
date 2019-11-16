
exports.up = function(knex, Promise) {
    return knex.schema.createTable('diner', tbl => {
        tbl.increments();
  
        tbl.string('username', 64).notNullable().unique();
        tbl.string('password', 64).notNullable();
        tbl.string('email', 64).notNullable().unique();
        tbl.string('streetAddress', 128);
        tbl.string('city', 64);
        tbl.string('state', 64);
        tbl.integer('zipcode', 64);
    })
    .createTable('restaurant', tbl => {
    tbl.increments();

    tbl.string('name');
    tbl.string('category');
    tbl.boolean('recentHistory');
    })
    .createTable('foodPref', tbl => {
    tbl.increments();

    tbl.boolean('spicy');
    tbl.boolean('vegetarian');
    tbl.boolean('vegan');
    tbl.boolean('femaleOwned');
    tbl.integer('diner_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('diner')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    })
    .createTable('platformPref', tbl => {
    tbl.increments();

    tbl.string('name', 64);
    tbl.integer('diner_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('diner')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    })
    .createTable('dinnerWheel', tbl => {
      tbl.increments();

      tbl.string('slot 1', 64);
      tbl.string('slot 2', 64);
      tbl.string('slot 3', 64);
      tbl.string('slot 4', 64);
      tbl.string('slot 5', 64);
      tbl.string('slot 6', 64);
      tbl.string('slot 7', 64);
      tbl.string('slot 8', 64);
      tbl.string('slot 9', 64);
      tbl.string('slot 10', 64);
      tbl.integer('restaurant_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('restaurant')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('dinnerWheel')
    .dropTableIfExists('platformPref')
    .dropTableIfExists('foodPref')
    .dropTableIfExists('restaurant')
    .dropTableIfExists('diner');
  };
