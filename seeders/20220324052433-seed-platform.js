'use strict';
let Platform = require("../data/platform.json")
module.exports = {
  up : (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    Platform = Platform.map(Element => {
      Element.createdAt = new Date()
      Element.updatedAt = new Date()
      return Element
    })
    return queryInterface.bulkInsert('Platforms', Platform, {})

  },

  down : (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    return queryInterface.bulkDelete('Platforms', null, {});
  }
};
