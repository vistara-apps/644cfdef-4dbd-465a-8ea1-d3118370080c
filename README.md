# EngageChain - Base Mini App

Monetize your audience with instant, interactive polls and rewards.

## Features

- **Micro-Survey & Poll Builder**: Create interactive polls with multiple choice, rating scales, and open-ended questions
- **Targeted Distribution**: Leverage social graphs for specific audience engagement
- **Tokenized Rewards**: Incentivize participation with custom or existing crypto tokens
- **Analytics Dashboard**: Real-time performance metrics and insights

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet Integration**: MiniKit + OnchainKit
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd engagechain
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
```

Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/).

3. **Run the development server**:
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # MiniKit & OnchainKit providers
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── AppShell.tsx       # Main app layout
│   ├── PollCard.tsx       # Poll display component
│   ├── InteractiveButton.tsx # Button component
│   ├── ProgressBar.tsx    # Progress indicator
│   ├── AnalyticsChart.tsx # Chart components
│   └── TokenDisplay.tsx   # Token balance display
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript definitions
│   ├── utils.ts           # Helper functions
│   └── constants.ts       # App constants
└── public/                # Static assets
```

## Key Components

### AppShell
Main application layout with responsive sidebar navigation.

### PollCard
Interactive poll component supporting voting, results display, and reward claiming.

### InteractiveButton
Customizable button component with multiple variants and sizes.

### AnalyticsChart
Chart components for displaying poll analytics using Recharts.

### TokenDisplay
Component for showing token balances and values.

## Base Mini App Integration

This app is built as a Base Mini App using:

- **MiniKitProvider**: Handles wallet connection and Base chain integration
- **OnchainKit**: Provides identity and wallet components
- **Base Chain**: All transactions occur on Base (Ethereum L2)

## Environment Variables

```bash
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
NEXT_PUBLIC_BASE_RPC_URL=https://mainnet.base.org
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Deployment

The app is optimized for deployment on Vercel or similar platforms that support Next.js.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.
