import { Composer } from 'grammy';
import { showMainMessage } from '../../helpers/message-helper';
import { CallbackEnum } from '../../models/callback.enum';
import { MyContext } from '../../types/my-context.type';

const composer = new Composer<MyContext>();
composer.callbackQuery(CallbackEnum.BACK, async (ctx) => {
  await showMainMessage(ctx);
  await ctx.answerCallbackQuery(); // this removes loading animation
});

export default composer;