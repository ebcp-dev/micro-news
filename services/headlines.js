const { json, send } = require('micro');

const { Headline } = require('../sequelize');

const headlinesServices = {};

headlinesServices.getHeadlines = async (req, res) => {
  const allHeadlines = await Headline.findAll({
    raw: true,
    order: ['published'] // Defaults to descending order
  });
  // Sort by latest published first
  let sortedHeadlines = allHeadlines.reverse();
  return send(res, 200, sortedHeadlines);
};

headlinesServices.postHeadlines = async (req, res) => {
  const data = await json(req);
  const newHeadline = {
    headline: data.headline,
    description: data.description,
    published: Date.now()
  };
  await Headline.findOrCreate({
    where: { headline: newHeadline.headline },
    defaults: newHeadline
  }).spread(async (headline, created) => {
    if (!created) {
      // Send error on duplicate
      return send(res, 400, { error: 'Headline already created.' });
    } else {
      // Show all after adding new headline
      const allHeadlines = await Headline.findAll({
        raw: true,
        order: ['published']
      });
      let sortedHeadlines = allHeadlines.reverse();
      return send(res, 200, sortedHeadlines);
    }
  });
};

module.exports = { headlinesServices };
