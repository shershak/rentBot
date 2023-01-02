import { Composer } from 'grammy';
import { MyContext } from '../../types/my-context';

const composer = new Composer<MyContext>();
composer.on("callback_query:data", async (ctx) => {
  ctx.logger.error(`Unknown button event with payload: ${ctx.callbackQuery.data}`);
  await ctx.answerCallbackQuery(); // this removes loading animation
});
export default composer;