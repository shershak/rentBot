import { Composer } from "grammy";

import { log } from "./logger.service";

const composer = new Composer();
composer.use(async (ctx, next) => {
  if (ctx?.chat?.type === "private") {
    await next();
  } else {
    log('Chat error: Chat isn\'t private');
  }
})
export default composer;