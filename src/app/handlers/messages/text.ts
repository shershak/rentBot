import { Composer, InlineKeyboard } from 'grammy';
import { localeService } from '../../middleware/get-user-language';
const composer = new Composer();

const filter = composer.filter(ctx => ctx.chat?.type === 'private');//TODO: delete
filter.on("message", (ctx) => {
  let message = localeService.translate('Hello');
  ctx.reply(message);
});

export default composer;