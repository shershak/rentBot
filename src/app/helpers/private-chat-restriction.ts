import { Composer } from "grammy";
import { LocaleService } from "../services/locale.service";

import { log } from "./log";

const composer = new Composer();
composer.use(async (ctx, next) => {
  if (ctx?.chat?.type === "private") {
    await next();
  } else {
    log('Error: Chat isn\'t private');
  }
})
export default composer;