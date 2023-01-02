import { Composer, InlineKeyboard } from 'grammy';
import { CallbackEnum } from '../../models/callback.enum';
import { UserStatusEnum } from '../../models/user-status.enum';
import { MyContext } from '../../types/my-context';

const composer = new Composer<MyContext>();
composer.on("message:text", async ctx => {
  if (ctx.session.userStatus === UserStatusEnum.WRITE_TO_ADMIN) {
    ctx.logger.log(`Message sent: ${ctx.message?.text}`)
    const messageFromUser = ctx.translate('confirm-admin-message', {
      user: ctx.from?.username ?? ctx.from?.id!,
      message: ctx.message?.text
    })
  
    await ctx.reply(messageFromUser, {
      parse_mode: 'HTML',
      reply_markup:
        new InlineKeyboard()
          .text(ctx.translate('confirm-admin-message-button'), CallbackEnum.CONFIRM_ADMIN_MESSAGE)
          .text(ctx.translate('deny-admin-message-button'), CallbackEnum.BACK)
    });
  }
});

export default composer;