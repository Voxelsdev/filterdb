exports.up = knex => {
  return knex.schema.createTable('product', table => {
    table.increments();
    table.string('name');
    table.integer('status');
    table.timestamps(true, true);
 });
};

exports.down = knex => {
  return knex.schema.dropTable('product');
};
