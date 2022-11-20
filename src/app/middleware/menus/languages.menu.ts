import { Menu, MenuRange } from "@grammyjs/menu";
import { LOCALES } from "../../consts";
import { log } from "../../helpers/log";
import { getLanguagesMessageText } from "../../helpers/message-helper";
import { Locale } from "../../models/locale.model";
import { MyContext } from "../../types/my-context.type";

const changeLanguageMenu = new Menu<MyContext>('change-language-menu')
  .submenu((ctx) => ctx.translate('change-language'), 'languages-menu');

const languagesMenu = new Menu<MyContext>('languages-menu')
  .dynamic(() => generateLanguageButtons())
  .back((ctx) => ctx.translate('back'));

changeLanguageMenu.register(languagesMenu);
export default changeLanguageMenu;

function generateLanguageButtons(): MenuRange<MyContext> {
  const languagesButtons = new MenuRange<MyContext>();
  LOCALES.forEach((lang: Locale) => {
    languagesButtons.text(lang.icon + ' ' + lang.name, async (ctx) => {
      log(`Info: Button is pressed: ${lang.name}`);
      let currentLanguage = await ctx.i18n.getLocale();
      log(`Info: Current language: ${currentLanguage}`);

      if (currentLanguage !== lang.id) {
        await ctx.i18n.setLocale(lang.id).then(() => log(`Info: Locale is changed: ${lang.name}`))
        ctx.menu.update();
        let text = getLanguagesMessageText(ctx);
        await ctx.editMessageText(text);
      }
      ctx.menu.back();
    }).row();
  });
  return languagesButtons;
}