import { Composer, InlineKeyboard } from 'grammy';
import changeLanguageMenu from '../../middleware/menus/languages';

const composer = new Composer();
composer.command('start', async (ctx) => {
  if (!ctx.from) {
    return;
  }
  
  const text =
  `Hi <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a>!`;
  
  await ctx.reply(text, {
    reply_markup: changeLanguageMenu,
    parse_mode: 'HTML'
  });
});
export default composer;