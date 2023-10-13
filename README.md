# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## Cache Testing
To test the cache run:
```bash
ab -n 1000 -c 10 http://localhost:3000/pokemon/<pokemon>
```
Replace `<pokemon>` with a pokemon name, for example `pikachu`.