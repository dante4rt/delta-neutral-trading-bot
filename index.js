require('dotenv').config();
const { sleep, displayHeader } = require('./src/utils');
const {
  placeSpotOrder,
  placeFuturesOrder,
  getOpenPositions,
} = require('./src/orders');
const binance = require('./src/api');

const symbol = 'BTC/USDT';
const amount = 0.01; // changeable

async function deltaNeutral() {
  displayHeader();

  console.log('🚀 Starting Delta-Neutral Strategy...'.green.bold);
  await sleep(3000);

  await binance.setSandboxMode(true);
  console.log('🧪 Sandbox mode enabled.'.yellow);

  await placeSpotOrder(symbol, amount);
  await placeFuturesOrder(symbol, amount);

  while (true) {
    await sleep(10000);
    console.log('\n⏳ Checking positions and market...'.cyan);

    const positions = await getOpenPositions();

    if (positions.length === 0) {
      console.log('\n⚠️ No open positions. Reattempting orders...\n'.red);
      await placeSpotOrder(symbol, amount);
      await placeFuturesOrder(symbol, amount);
    } else {
      console.log('\n✅ Positions are open and being monitored.'.green);
      break;
    }
  }
}

(async () => {
  try {
    await deltaNeutral();
  } catch (error) {
    console.error(`❌ An error occurred: ${error}`.red);
  }
})();
