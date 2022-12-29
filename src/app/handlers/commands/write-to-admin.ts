import { Composer, InlineKeyboard } from 'grammy';
import { CallbackEnum } from '../../models/callback.enum';
import { CommandsEnum } from '../../models/commands.enum';
import { MyContext } from '../../types/my-context.type';

const composer = new Composer<MyContext>();
composer.command(CommandsEnum.WRITE_TO_ADMIN, async (ctx) => {
  if (!ctx.from) {
    return;
  }

  const text = ctx.translate('write-to-admin-message');
  // Add status to user in session(DB)
  const backText = ctx.translate('back');
  const backButton = new InlineKeyboard()
    .text(backText, CallbackEnum.BACK);

  await ctx.reply(text, {
    parse_mode: 'HTML',
    reply_markup: backButton
  });
  
});
export default composer;