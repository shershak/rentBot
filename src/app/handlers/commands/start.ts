import { Composer, InlineKeyboard } from 'grammy';
import changeLanguageMenu from '../../middleware/menus/languages.menu';
import { MyContext } from '../../types/my-context.type';

const composer = new Composer<MyContext>();
composer.command('start', async (ctx) => {
  if (!ctx.from) {
    return;
  }
  
  const text = ctx.translate('hello-message');
  
  await ctx.reply(text, {
    // reply_markup: changeLanguageMenu,
    parse_mode: 'HTML'
  });
});
export default composer;