exports.up = knex => {
  return knex.schema.createTable('company', table => {
    table.increments();
    table.string('name');
    table.string('fax');
    table.string('address_line_1');
    table.string('address_line_2');
    table.string('city');
    table.string('state');
    table.string('country');
    table.string('zip');
    table.timestamps(true, true);
  });
};

exports.down = knex => {
  return knex.schema.dropTable('company');
};
