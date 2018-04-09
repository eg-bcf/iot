exports.up = function(knex, Promise) {
  return knex.schema.table('results', function(table){
    table.dropColumn('created_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('results', function(table){
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};
