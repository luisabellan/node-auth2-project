
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'joe',
          password: 'abc123',
          department: 'IT',
          role: 'admin'
        },
         {
          username: 'joe200',
          password: 'abc123',
          department: 'IT',
          role: 'normal'
        },
 
      ]);
    });
};
