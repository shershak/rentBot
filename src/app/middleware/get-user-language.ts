import { Composer } from "grammy";
import { DEFAULT_LOCALE } from "../consts";
import { LocaleService } from "../services/locale.service";

const composer = new Composer();
export const localeService = new LocaleService();
composer.use(async (ctx, next) => {

  // check user in DB ctx.from.id and get user language or get user language ctx.from.language_code
  // set language to i18n

  interface User {
    id: number,
    language: string
  }
  let userLanguage = DEFAULT_LOCALE;
  let users: User[] = [];
  if (ctx?.from && users.length > 0) {
    users.forEach(user => {
      if (user.id === ctx.from?.id) {
        localeService.setLocale(user.language);
      }
    })
  } else {
    let user: User = {
      id: ctx.from?.id ?? 0,
      language: ctx.from?.language_code ?? 'en'
    }
    users.push(user)
    userLanguage = ctx.from?.language_code ?? 'en';
    localeService.setLocale(userLanguage);
  }
  await next();
})
export default composer;