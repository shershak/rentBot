import { Composer } from "grammy";
import { ChatType } from "../models/chat-type.enum";
import { MyContext } from "../types/my-context";

const composer = new Composer<MyContext>();
composer.use(async (ctx, next) => {
  if (ctx?.chat?.type !== ChatType.PRIVATE) {
    ctx.logger.error('Chat isn\'t private');
    return;
  }
  await next();
})
export default composer;