exports.seed = function(knex, Promise) {
  return knex('tests').del()
    .then(function () {
      return knex('tests').insert({
        board_id: 0,
        test_description: "testing for the drying time of water, abbott ICQ trigger solution, sodium hydroxide, and sodium azide",
        name: "4 parallel resistor array drying test",
        customer: "internal",
      });
    });
};
