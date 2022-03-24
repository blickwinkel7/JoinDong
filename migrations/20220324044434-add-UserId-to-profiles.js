'use strict';

module.exports = {
  up : (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    return queryInterface.addColumn('Profiles', 'UserId', {
      type : Sequelize.INTEGER,
      references: {
        model : {
        tableName : 'Users'
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
    return queryInterface.dropTable('Profiles', 'UserId', {});
  }
};
