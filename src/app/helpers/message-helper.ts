import mainMenu from "../middleware/menus/main.menu";
import { MyContext } from "../types/my-context";

export async function sendMainMessage(ctx: MyContext): Promise<void> {
  const text = ctx.translate('main-message');
  await ctx.reply(text, { reply_markup: mainMenu })
}