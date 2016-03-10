exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('location');
      table.integer('gender_id').unsigned().references('col').inTable('genders').references('id');
      table.string('tag_line');
      table.text('bio');
      table.dateTime('member_since');
      table.string('avatar');
      table.boolean('banned');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('users')
  ]);
};
