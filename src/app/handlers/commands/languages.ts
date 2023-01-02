import { Composer } from 'grammy';
import { getLanguagesMessageText } from '../../middleware/menus/helpers';
import changeLanguageMenu from '../../middleware/menus/languages.menu';
import { CommandsEnum } from '../../models/commands.enum';
import { MyContext } from '../../types/my-context';

const composer = new Composer<MyContext>();
composer.command(CommandsEnum.LANGUAGES, async (ctx) => {
  if (!ctx.from) {
    return;
  }
  
  const text = getLanguagesMessageText(ctx);
  await ctx.reply(text, {
    reply_markup: changeLanguageMenu
  });
});
export default composer;