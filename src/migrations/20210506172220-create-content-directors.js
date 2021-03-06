'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('content_directors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      director_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'directors',
          key: 'id'
        }
      },
      content_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'contents',
          key: 'id'
        }
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('content_directors');
  }
};