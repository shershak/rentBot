import { Menu, MenuRange } from "@grammyjs/menu";
import { LOCALES } from "../../consts";
import { log } from "../../helpers/log";
import { localeService } from "../get-user-language";


console.log(localeService.getCurrentLocale());

const changeLanguageMenu = new Menu('change-language-menu')
  .submenu(() => localeService.translate('change_language'), 'languages-menu');
const languagesMenu = new Menu('languages-menu')
  .dynamic(() => {
    const languagesButtons = new MenuRange();
    const languagesList = LOCALES;
    languagesList.forEach(lang => {
      languagesButtons.text(lang.toString(), (ctx) => {
        log(`Button pressed: ${lang}`);
        let currentLanguage = localeService.getCurrentLocale();
        log(`Current language: ${currentLanguage}`);

        if (currentLanguage !== lang) {
          localeService.setLocale(lang);
          ctx.menu.update();
        }
        ctx.menu.back();
      }).row();
    });
    return languagesButtons;
  })
  .back(() => localeService.translate('back'));

changeLanguageMenu.register(languagesMenu);
export default changeLanguageMenu;