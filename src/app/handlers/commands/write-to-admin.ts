import { Composer, InlineKeyboard } from 'grammy';
import { CommandsEnum } from '../../models/commands.enum';
import { MyContext } from '../../types/my-context.type';

const composer = new Composer<MyContext>();
composer.command(CommandsEnum.WRITE_TO_ADMIN, async (ctx) => {
  if (!ctx.from) {
    return;
  }

  const text = ctx.translate('write-to-admin-message');
  // Add status to user in session(BD)

  await ctx.reply(text, {
    parse_mode: 'HTML'
  });
  
});
export default composer;