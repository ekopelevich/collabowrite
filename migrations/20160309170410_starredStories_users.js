exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('starredStories_users', function(table) {
      table.increments('id').primary();
      table.integer('story_id').unsigned().references('col').inTable('stories').references('id');
      table.integer('user_id').unsigned().references('col').inTable('users').references('id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('starredStories_users')
  ]);
};
