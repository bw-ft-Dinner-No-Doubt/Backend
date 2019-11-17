
exports.seed = function(knex) {
      return knex('diner').insert([
        {username: '', password: '', email: '', streetAddress: '', city: '', zipcode: 20000},
        {username: '', password: '', email: '', streetAddress: '', city: '', zipcode: 20000},
        {username: '', password: '', email: '', streetAddress: '', city: '', zipcode: 20000},
        {username: '', password: '', email: '', streetAddress: '', city: '', zipcode: 20000}
      ]);
};
