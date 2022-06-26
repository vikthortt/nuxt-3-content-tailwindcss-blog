# Nuxt 3 Static Blog

Nuxt 3 static blog generator inspired by [this video](https://www.youtube.com/watch?v=hDJGGzyaYx8&ab_channel=BehonBaker).

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run generate
```

Now you should be able to deploy the content of `.output/public` to any static hosting service

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
