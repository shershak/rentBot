import { Composer, InlineKeyboard } from 'grammy';
import { LOCALES } from '../../consts';
import { getLanguagesMessageText } from '../../helpers/message-helper';
import changeLanguageMenu from '../../middleware/menus/languages.menu';
import { CommandsEnum } from '../../models/commands.enum';
import { MyContext } from '../../types/my-context.type';

const composer = new Composer<MyContext>();
composer.command(CommandsEnum.LANGUAGES, async (ctx) => {
  if (!ctx.from) {
    return;
  }
  
  const text = getLanguagesMessageText(ctx);
  await ctx.reply(text, {
    reply_markup: changeLanguageMenu,
    parse_mode: 'HTML'
  });
});
export default composer;