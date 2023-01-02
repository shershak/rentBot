import { Composer, InlineKeyboard } from 'grammy';
import { CallbackEnum } from '../../models/callback.enum';
import { UserStatusEnum } from '../../models/user-status.enum';
import { MyContext } from '../../types/my-context';
const messages = new Composer<MyContext>();

messages.on("message", async ctx => {
  if (ctx.session.userStatus === UserStatusEnum.WRITE_TO_ADMIN) {
    await ctx.reply(ctx.translate('only-text-message'));
  }
});

export default messages;