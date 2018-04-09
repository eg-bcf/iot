exports.seed = function(knex, Promise) {
  return knex('liquids').del()
    .then(function () {
      return knex('liquids').insert({
        description: "distilled water",
        customer: "generic",
        name: "distilled water"
      });
    }).then(function () {
      return knex('liquids').insert({
        description: "isopropyl alcohol",
        customer: "generic",
        name: "isopropyl alcohol"
      });
    }).then(function () {
      return knex('liquids').insert({
        description: "abbott ICQ trigger solution",
        customer: "abbott",
        name: "trigger"
      });
    }).then(function () {
      return knex('liquids').insert({
        description: "abbott ICQ pre trigger solution",
        customer: "abbott",
        name: "pre trigger"
      });
    }).then(function () {
      return knex('liquids').insert({
        description: "abbott ICQ buffer solution",
        customer: "abbott",
        name: "buffer"
      });
    }).then(function () {
      return knex('liquids').insert({
        description: "sodium hydroxide",
        customer: "generic",
        name: "sodium hyroxide"
      });
    }).then(function () {
      return knex('liquids').insert({
        description: "sodium azide",
        customer: "generic",
        name: "sodium azide"
      });
    });
};
