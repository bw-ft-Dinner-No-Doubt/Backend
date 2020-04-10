
exports.seed = function(knex) {
      return knex('diner').insert([
        {username: 'admin', password: 'password', email: 'admin@email.com', streetAddress: '102 Admin Lane', city: 'Admin', state: "New York", zipcode: 20000},
        {username: 'user', password: 'pass', email: 'user@gmail.com', streetAddress: '422 User Road', city: 'User', state: "Florida", zipcode: 44444},
        {username: 'Jake', password: 'cool', email: 'jake@ymail.com', streetAddress: '20 New Street', city: 'Clevelent', state: "Ohio", zipcode: 47382},
        {username: 'newuser', password: 'newpass', email: 'new@email.com', streetAddress: '544 This St.', city: 'Chicago', state: "Illinois", zipcode: 37722}
      ]);
};
