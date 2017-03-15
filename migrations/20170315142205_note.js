exports.up = knex => {
  return knex.schema.createTable('note', table => {
    table.increments();
    table.string('note');
    table.timestamps(true, true);
  });
};

exports.down = knex => {
  return knex.schema.dropTable('note');
};
