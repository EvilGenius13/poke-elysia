import { Elysia } from "elysia";
import {html} from '@elysiajs/html'

const app = new Elysia()
  .use(html())
  .get("/script.js", () => Bun.file("script.js").text())
  .get("/", () => Bun.file("public/index.html"))
  .get('/pokemon', () => Bun.file('public/pokemon.html'))
  .get('/pokemon/:name', ({params}) => {
    return console.log("Pokemon", params.name)
  })
  .listen(3000);


console.log(
  `🦊 Elysia is running on ${app.server?.hostname}:${app.server?.port}`
)
