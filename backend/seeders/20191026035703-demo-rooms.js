'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('rooms', [{
        name: 'A1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'A2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'A3',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
