import { Menu, MenuRange } from "@grammyjs/menu";
import { LOCALES } from "../../consts";
import { Locale } from "../../models/locale.model";
import { MyContext } from "../../types/my-context";
import { MenuEnum } from "./menu.enum";

const languagesMenu = new Menu<MyContext>(MenuEnum.LANGUAGES)
  .dynamic(generateLanguageButtons)
  .back(ctx => ctx.translate('back'), showMainMessage);
export default languagesMenu;

function generateLanguageButtons(): MenuRange<MyContext> {
  const languagesButtons = new MenuRange<MyContext>();
  LOCALES.forEach((lang: Locale) => {
    languagesButtons.text(
      lang.icon + ' ' + lang.name,
      async (ctx) => {
        ctx.logger.log(`Button is pressed: ${lang.name}`);
        const currentLanguage = await ctx.i18n.getLocale();
        ctx.logger.log(`Current language: ${currentLanguage}`);

        if (currentLanguage !== lang.id) {
          await ctx.i18n
            .setLocale(lang.id)
            .then(() => ctx.logger.log(`Locale is changed: ${lang.name}`))
        }
        ctx.menu.back();
        await showMainMessage(ctx);
      }).row();
  });
  return languagesButtons;
}

async function showMainMessage(ctx: MyContext): Promise<void> {
  const text = ctx.translate('main-message');
  await ctx.editMessageText(text);
}