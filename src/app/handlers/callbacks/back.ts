import { Composer } from 'grammy';
import { sendMainMessage } from '../../helpers/message-helper';
import mainMenu from '../../middleware/menus/main.menu';
import { CallbackEnum } from '../../models/callback.enum';
import { UserStatusEnum } from '../../models/user-status.enum';
import { MyContext } from '../../types/my-context';

const composer = new Composer<MyContext>();
composer.callbackQuery(CallbackEnum.BACK, async (ctx) => {
  ctx.logger.log(`${CallbackEnum.BACK} pressed.`)
  if (ctx.session.userStatus === UserStatusEnum.DEFAULT) {
    ctx.deleteMessage();
  }

  if (ctx.session.userStatus === UserStatusEnum.WRITE_TO_ADMIN) {
    ctx.session.userStatus = UserStatusEnum.DEFAULT
    ctx.deleteMessage();
    await sendMainMessage(ctx);
  }
});

export default composer;