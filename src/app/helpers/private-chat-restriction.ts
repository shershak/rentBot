import { Composer } from "grammy";
import { ChatType } from "../models/chat-type.enum";
import { MyContext } from "../types/my-context.type";

const composer = new Composer<MyContext>();
composer.use(async (ctx, next) => {
  if (ctx?.chat?.type === ChatType.PRIVATE) {
    await next();
  } else {
    ctx.logger.log('Chat error: Chat isn\'t private');
  }
})
export default composer;