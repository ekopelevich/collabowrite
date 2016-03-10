exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('genders', function(table) {
      table.increments('id').primary();
      table.string('gender');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('genders')
  ]);
};
