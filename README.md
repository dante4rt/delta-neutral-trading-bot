# Delta Neutral Trading Bot

A Delta Neutral Trading Bot utilizing Binance API to execute spot and futures trades with a neutral position strategy.

## Features

- Executes spot buy orders and futures sell orders to maintain a delta-neutral position.
- Monitors open positions and automatically reattempts orders if no positions are open.
- Uses Binance's sandbox mode for testing.

## Prerequisites

- Node.js (version 14 or higher)
- NPM (Node Package Manager)
- Binance API keys (required for the bot to interact with Binance)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dante4rt/delta-neutral-trading-bot.git
   cd delta-neutral-trading-bot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root directory. Add your Binance API keys:

   ```bash
   API_KEY=your_binance_api_key
   API_SECRET=your_binance_api_secret
   ```

   > **Note:** Ensure your `.env` file is not shared publicly as it contains sensitive information.

## Usage

To run the bot, use the following command:

```bash
npm start
```

This will start the bot and begin executing the delta-neutral trading strategy.

## How it Works

- The bot places a **SPOT buy** order for the specified amount of an asset (e.g., BTC/USDT).
- Simultaneously, it places a **FUTURES sell** order for the same asset to maintain a delta-neutral position.
- It periodically checks for open positions and reattempts to place the orders if no positions are found.

## Disclaimer

This project is intended for educational purposes only. Please use caution when running trading bots on live markets. Testing in Binance's sandbox mode is recommended.

## Donations

If you would like to support the development of this project, you can make a donation using the following addresses:

- **Solana**: `GLQMG8j23ookY8Af1uLUg4CQzuQYhXcx56rkpZkyiJvP`
- **EVM**: `0x960EDa0D16f4D70df60629117ad6e5F1E13B8F44`
- **BTC**: `bc1p9za9ctgwwvc7amdng8gvrjpwhnhnwaxzj3nfv07szqwrsrudfh6qvvxrj8`

## License

**Delta Neutral Trading Bot** is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
