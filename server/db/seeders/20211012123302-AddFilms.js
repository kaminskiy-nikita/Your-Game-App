const restuarants = [
  {
    title: 'Маленькая Сицилия',
    location: 'Санкт-Петербург',
    type: 'Итальянская кухня',
  },
  {
    title: 'Веселидзе',
    location: 'Санкт-Петербург',
    type: 'Грузинская кухня',
  },
  {
    title: 'Крошка Картошка',
    location: 'Москва',
    type: 'Фаст Фуд',
  },
  
]

module.exports = {
  up: async (queryInterface, Sequelize) => {

    for (let i = 0; i < restuarants.length; i += 1) {
      await queryInterface.bulkInsert('Restaurants', [{
        title: restuarants[i].title,
        location: restuarants[i].location,
        type: restuarants[i].type,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Restaurants', null, {});
  },
};
