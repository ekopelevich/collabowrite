exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('stories', function(table) {
      table.increments('id').primary();
      table.integer('owner_id').unsigned().references('col').inTable('users').references('id');
      table.string('title');
      table.dateTime('start_date');
      table.date('summary');
      table.integer('genre_id').unsigned().references('col').inTable('genres').references('id');
      table.dateTime('checkout_time');
      table.integer('state_id').unsigned().references('col').inTable('states').references('id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('stories')
  ]);
};
