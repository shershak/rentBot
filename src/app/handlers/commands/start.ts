import { Composer, InlineKeyboard } from 'grammy';
const composer = new Composer();

const filter = composer.filter(ctx => ctx.chat?.type === 'private');
filter.command('start', (ctx) => {
  if (!ctx.from) {
    return;
  }
  
  const text =
  `Hi <a href="tg://user?id=${ctx.from.id}">
  ${ctx.from.first_name + ' ' + ctx.from.last_name}
  </a>\n`;
  
  return ctx.reply(text, {
    reply_markup: new InlineKeyboard().text('test button'), //TODO: constract with rows
    parse_mode: 'HTML'
  });
});
export default composer;