const { router, get, post } = require('microrouter');

const { headlinesServices } = require('./services/headlines');

module.exports = router(
  get('/', headlinesServices.getHeadlines),
  post('/', headlinesServices.postHeadlines)
);
