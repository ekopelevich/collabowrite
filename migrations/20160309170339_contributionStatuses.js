exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('statuses', function(table) {
      table.increments('id').primary();
      table.string('status');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('statuses')
  ]);
};
