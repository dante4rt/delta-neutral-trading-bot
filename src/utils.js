require('colors');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=      Delta Neutral Trading Bot       ='.cyan.bold);
  console.log('=     Created by HappyCuanAirdrop      ='.cyan);
  console.log('=    https://t.me/HappyCuanAirdrop     ='.cyan);
  console.log('========================================\n'.cyan);
}

module.exports = { sleep, displayHeader };
