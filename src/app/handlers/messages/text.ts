import { Composer, InlineKeyboard } from 'grammy';
import { MyContext } from '../../types/my-context.type';
const composer = new Composer<MyContext>();

const filter = composer.filter(ctx => ctx.chat?.type === 'private');//TODO: delete
filter.on("message", (ctx) => {
  let message = ctx.translate('hello');
  ctx.reply(message);
});

export default composer;