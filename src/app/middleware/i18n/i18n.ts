import { Composer, session } from "grammy";
import { I18n } from "@grammyjs/i18n";
import { DEFAULT_LOCALE, LOCALES_DIR } from "../../consts";
import { MyContext } from "../../types/my-context.type";

const composer = new Composer<MyContext>();
const i18n = new I18n<MyContext>({
  directory: LOCALES_DIR,
  defaultLocale: DEFAULT_LOCALE,
  useSession: true
});
composer.use(i18n)
export default composer;