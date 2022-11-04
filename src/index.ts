import { Application, send } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import api from "./api.ts";

const app = new Application();
const PORT = parseInt(Deno.env.get("PORT") ?? "8000");

log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("INFO"),
  },
  loggers: {
    default: {
      level: "INFO",
      handlers: ["console"],
    },
  },
});

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    log.error(e);
    ctx.response.body = "Internal Server Error";
    throw e;
  }
});

app.use(async (ctx, next) => {
  await next();
  const time = ctx.response.headers.get("X-Response-Time");
  log.info(`${ctx.request.method} ${ctx.request.url} ${time}`);
});

app.addEventListener("error", (e) => {
  log.error(e.error);
});

app.use(api.routes());
api.use(api.allowedMethods());

if (import.meta.main) {
  log.info(`Starting server on port ${PORT}`);
  await app.listen({
    port: PORT,
  });
}
