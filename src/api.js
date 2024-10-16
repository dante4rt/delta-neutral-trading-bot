const ccxt = require('ccxt');

const binance = new ccxt.binance({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET,
  options: {
    defaultType: 'future',
  },
});

module.exports = binance;
