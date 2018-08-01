const Sequelize = require('sequelize');
const axios = require('axios');

const HeadlineModel = require('./models/Headline');
const db = require('./config/db');

const sequelize = new Sequelize(db.dbname, db.username, db.password, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});

// Create Headline model from definition in /models/Headline.js
const Headline = HeadlineModel(sequelize, Sequelize);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);
    // Populate database
    const url = 'https://publist.ai/api/v2/jobs.backend';
    return axios.post(url, {
      query: 'tech'
    });
  })
  .then(result => {
    const data = result.data.data;
    return data;
  })
  .then(data => {
    data.map(item => {
      const newHeadline = {
        headline: item.title,
        description: item.description,
        published: item.published_at
      };
      Headline.findOrCreate({
        where: { headline: newHeadline.headline },
        defaults: newHeadline
      });
    });
  });

module.exports = {
  Headline,
  sequelize
};
