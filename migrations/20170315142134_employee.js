exports.up = knex => {
  return knex.schema.createTable('employee', table => {
    table.increments();
    table.integer('company_id')
      .notNullable()
      .references('id')
      .inTable('company')
      .onDelete('CASCADE');
    table.integer('person_id')
      .notNullable()
      .references('id')
      .inTable('person')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = knex => {
  return knex.schema.dropTable('employee');
};
