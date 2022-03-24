'use strict';

module.exports = {
  up : (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    return queryInterface.addColumn('Subscribes', 'ProductId', {
      type : Sequelize.INTEGER,
      references: {
        model : {
        tableName : 'Platforms'
        },
      key : 'id'
      },
    });
  },

  down : (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    return queryInterface.dropTable('Subscribes', 'ProductId', {});
  }
};
