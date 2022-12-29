import { InlineKeyboard } from "grammy";
import { LOCALES } from "../consts";
import { MyContext } from "../types/my-context.type";

export function getLanguagesMessageText(ctx: MyContext): string {
  return ctx.translate('change-language-message', { 
    languagesNumber: LOCALES.length,
    languages: LOCALES.map(locale => locale.name).join(', ')
  });
}

export async function showMainMessage(ctx: MyContext) {
  const text = ctx.translate('hello-message');
  await ctx.editMessageText(text, {
    reply_markup: new InlineKeyboard()
  })
}