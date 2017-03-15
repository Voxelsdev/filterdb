exports.up = knex => {
  return knex.schema.createTable('person', table => {
    table.increments();
    table.string('name');
    table.string('title');
    table.string('department');
    table.string('email');
    table.string('office_phone');
    table.string('mobile_phone');
    table.string('department_phone');
    table.string('fax');
    table.timestamps(true, true);
  });
};

exports.down = knex => {
  return knex.shema.dropTable('person');
};
