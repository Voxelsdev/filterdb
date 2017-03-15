exports.up = knex => {
  return knex.schema.createTable('note_product', table => {
    table.increments();
    table.integer('note_id')
      .notNullable()
      .references('id')
      .inTable('note')
      .onDelete('CASCADE');
    table.integer('product_id')
      .notNullable()
      .references('id')
      .inTable('product')
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
  return knex.schema.dropTable('note_product');
};
