// const micro = require('micro');
// const test = require('ava');
// const listen = require('test-listen');
// const request = require('request-promise');
// const { router, get, post } = require('microrouter');
// // const axios = require('axios');

// const { headlinesServices } = require('../services/headlines');
// const { Headline, sequelize } = require('../sequelize');

// const server = fn => listen(micro(fn));

// test.before(t => {
//   Headline.sync({ force: true })
//     .then(() => {
//       console.log(`Database & tables created!`);
//       // Populate database
//       const url = 'https://publist.ai/api/v2/jobs.backend';
//       return axios.post(url, {
//         query: 'tech'
//       });
//     })
//     .then(result => {
//       const data = result.data.data;
//       return data;
//     })
//     .then(data => {
//       data.map(item => {
//         const newHeadline = {
//           headline: item.title,
//           description: item.description,
//           published: item.published_at
//         };
//         Headline.findOrCreate({
//           where: { headline: newHeadline.headline },
//           defaults: newHeadline
//         });
//       });
//     });
// });

// test('GET /test', async t => {
//   const routes = router(
//     get('/headlines', headlinesServices.getHeadlines),
//     post('/headlines', headlinesServices.postHeadlines),
//     get('/test', () => 'test')
//   );
//   const url = await server(routes);
//   const headlines = await request(`${url}/headlines`);
//   const test = await request(`${url}/test`);
//   console.log(headlines);
//   t.is(test, 'test');
// });
