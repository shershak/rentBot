import { Menu } from "@grammyjs/menu";
import { InlineKeyboard } from "grammy";
import { CallbackEnum } from "../../models/callback.enum";
import { UserStatusEnum } from "../../models/user-status.enum";
import { MyContext } from "../../types/my-context";
import { getLanguagesMessageText } from "./helpers";
import languagesMenu from "./languages.menu";
import { MenuEnum } from "./menu.enum";

const mainMenu = new Menu<MyContext>(MenuEnum.MAIN)
  .submenu(ctx => ctx.translate('change-language.button'), MenuEnum.LANGUAGES, showLanguagesMessage).row()
  .text(ctx => ctx.translate('write-to-admin-button'), showWriteToAdminMessage).row();

mainMenu.register(languagesMenu);
export default mainMenu;

async function showLanguagesMessage(ctx: MyContext): Promise<void> {
  ctx.logger.log('change-language.button pressed.')
  const text = getLanguagesMessageText(ctx);
  await ctx.editMessageText(text);
}

async function showWriteToAdminMessage(ctx: MyContext) {
  ctx.logger.log('write-to-admin-button pressed.')

  if (ctx.session.userStatus === UserStatusEnum.WRITE_TO_ADMIN) {
    ctx.deleteMessage();
  }

  if (ctx.session.userStatus === UserStatusEnum.DEFAULT) {
    ctx.session.userStatus = UserStatusEnum.WRITE_TO_ADMIN
    ctx.deleteMessage();
    ctx.reply(ctx.translate('write-to-admin-message'), {
      reply_markup: new InlineKeyboard().text(ctx.translate('back'), CallbackEnum.BACK)
    });
  }
}

