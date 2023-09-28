import { Elysia } from "elysia";
import {html} from '@elysiajs/html'
// @ts-ignore
import {Pokemon} from 'fast-poke-fetch'
// @ts-ignore
import ejs from 'ejs'

const app = new Elysia()
  .use(html())
  .get("/script.js", () => Bun.file("script.js").text())
  .get("/", () => Bun.file("public/index.html"))
  .get('/pokemon', () => Bun.file('public/pokemon.html'))
  .get('/pokemon/:name', async (handler) => {
    const name = handler.params.name;
    const pokemonData = await Pokemon(name);
    const html = await ejs.renderFile('public/details.ejs', { pokemonData });
    return html;
  })
  .listen(3000);


console.log(
  `🦊 Elysia is running on ${app.server?.hostname}:${app.server?.port}`
)
