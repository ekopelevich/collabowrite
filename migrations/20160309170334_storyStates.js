exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('states', function(table) {
      table.increments('id').primary();
      table.string('state');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('states')
  ]);
};
