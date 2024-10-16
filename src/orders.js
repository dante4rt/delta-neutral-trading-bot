const binance = require('./api');

async function placeSpotOrder(symbol, amount) {
  try {
    console.log(`\n🔵 Placing SPOT buy order for ${amount} ${symbol}...`.blue);
    const order = await binance.createMarketBuyOrder(symbol, amount);
    console.log('✅ Spot order placed successfully:'.green.bold);
    console.log(`   - Order ID: `.gray + `${order.id}`.yellow);
    console.log(`   - Symbol: `.gray + `${order.symbol}`.magenta);
    console.log(`   - Side: `.gray + `${order.side}`.blue);
    console.log(`   - Amount: `.gray + `${order.amount}`.cyan);
    console.log(`   - Filled: `.gray + `${order.filled}`.cyan);
    console.log(`   - Average Price: `.gray + `${order.average}`.cyan);
    console.log(`   - Cost: `.gray + `${order.cost}`.cyan);
    console.log(`   - Status: `.gray + `${order.status}`.green.bold);
    return order;
  } catch (error) {
    console.error(`❌ Error placing SPOT buy order: ${error}`.red);
  }
}

async function placeFuturesOrder(symbol, amount) {
  try {
    console.log(
      `\n🔴 Placing FUTURES sell order for ${amount} ${symbol}...`.red
    );
    const order = await binance.createMarketSellOrder(symbol, amount);
    console.log('✅ Futures order placed successfully:'.green.bold);
    console.log(`   - Order ID: `.gray + `${order.id}`.yellow);
    console.log(`   - Symbol: `.gray + `${order.symbol}`.magenta);
    console.log(`   - Side: `.gray + `${order.side}`.red);
    console.log(`   - Amount: `.gray + `${order.amount}`.cyan);
    console.log(`   - Filled: `.gray + `${order.filled}`.cyan);
    console.log(`   - Average Price: `.gray + `${order.average}`.cyan);
    console.log(`   - Cost: `.gray + `${order.cost}`.cyan);
    console.log(`   - Status: `.gray + `${order.status}`.green.bold);
    return order;
  } catch (error) {
    console.error(`❌ Error placing FUTURES sell order: ${error}`.red);
  }
}

async function getOpenPositions() {
  const balance = await binance.fetchBalance();
  const positions = balance.info.positions.filter(
    (pos) => parseFloat(pos.positionAmt) !== 0
  );
  console.log('\n📈 Current Open Positions:'.yellow);
  console.log(positions);
  return positions;
}

module.exports = { placeSpotOrder, placeFuturesOrder, getOpenPositions };
