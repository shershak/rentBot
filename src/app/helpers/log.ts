import { ParseMode } from "grammy/out/types";
import { environment } from "../../environments/environment";
import { bot } from "../bot";

export const log = async (message: string, parse_mode: ParseMode = 'HTML') => {
  if (!environment.isProd) {
    console.log(message);
    return;
  }
  return await bot.api.sendMessage(environment.logChannel, message, {
    parse_mode
  });
};