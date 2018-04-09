exports.up = function(knex, Promise) {
  return knex.schema.table('liquids', function(table){
    table.dropUnique('description');
    table.dropUnique('customer');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('liquids', function(table){
    table.unique('description');
    table.unique('customer');
  });
};
