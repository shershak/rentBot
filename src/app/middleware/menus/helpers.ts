import { LOCALES } from "../../consts";
import { MyContext } from "../../types/my-context";

export function getLanguagesMessageText(ctx: MyContext): string {
  return ctx.translate('change-language.message', { 
    languagesNumber: LOCALES.length,
    languages: LOCALES.map(locale => locale.name).join(', ')
  });
}