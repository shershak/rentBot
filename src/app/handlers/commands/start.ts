import { Composer } from 'grammy';
import { CommandsEnum } from '../../models/commands.enum';
import { UserStatusEnum } from '../../models/user-status.enum';
import { MyContext } from '../../types/my-context';
import { sendMainMessage } from '../../helpers/message-helper'

const composer = new Composer<MyContext>();
composer.command(CommandsEnum.START, async (ctx) => {
  if (!ctx.from) {
    return;
  }

  ctx.logger.log(`${CommandsEnum.START} pressed.`)
  if (ctx.session.userStatus === UserStatusEnum.WRITE_TO_ADMIN) {
    ctx.deleteMessage();
    return;
  }

  await ctx.reply(ctx.translate('hello-message'));
  await sendMainMessage(ctx);
});
export default composer;