import { Composer } from "grammy";
import { DEFAULT_LOCALE } from "../../consts";
import { log } from "../../helpers/log";
import { MyContext } from "../../types/my-context.type";

const composer = new Composer<MyContext>();
composer.use(async (ctx, next) => {
  let userLanguage = ctx.session?.__language_code ?? ctx.from?.language_code ?? DEFAULT_LOCALE;
  let currentLocale = await ctx.i18n.getLocale();
  
  if (userLanguage !== currentLocale) {
    //TODO: create new helper for locale = set locale + log it
    await ctx.i18n.setLocale(userLanguage).then(() => log(`Locale is changed: ${userLanguage}`));
  }
  await next();
})
export default composer;