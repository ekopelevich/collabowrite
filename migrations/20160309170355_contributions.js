exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('contributions', function(table) {
      table.increments('id').primary();
      table.integer('author_id').unsigned().references('col').inTable('users').references('id');
      table.integer('story_id').unsigned().references('col').inTable('stories').references('id');
      table.string('title');
      table.dateTime('start_time');
      table.integer('status').unsigned().references('col').inTable('statuses').references('id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('contributions')
  ]);
};
