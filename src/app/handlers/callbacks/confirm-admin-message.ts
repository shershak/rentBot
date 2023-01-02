import { Composer } from 'grammy';
import { sendMainMessage } from '../../helpers/message-helper';
import { CallbackEnum } from '../../models/callback.enum';
import { UserStatusEnum } from '../../models/user-status.enum';
import { MyContext } from '../../types/my-context';

const callbacks = new Composer<MyContext>();
callbacks.callbackQuery(CallbackEnum.CONFIRM_ADMIN_MESSAGE, async (ctx) => {
  ctx.logger.log(`${CallbackEnum.CONFIRM_ADMIN_MESSAGE} pressed.`);
  
  if (ctx.session.userStatus === UserStatusEnum.DEFAULT) {
    await ctx.deleteMessage();
  }

  if (ctx.session.userStatus === UserStatusEnum.WRITE_TO_ADMIN) {
    await ctx.deleteMessage();
    await ctx.reply(ctx.translate('success-sent-message'));
    await sendMainMessage(ctx);
    ctx.session.userStatus = UserStatusEnum.DEFAULT;
  }
});

export default callbacks;