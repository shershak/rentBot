import { Composer } from "grammy";

const composer = new Composer();
composer.use(async (ctx, next) => {
  if (ctx.message?.chat.type === "private") {
    await next();
  }
})
export default composer;