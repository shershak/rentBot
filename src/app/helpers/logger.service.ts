import bot from "../../..";
import { environment } from "../../environments/environment";
import { LogTypeEnum } from "../models/log-type.enum";
import { MyContext } from "../types/my-context.type";

export const log = async (message: string, ctx?: MyContext): Promise<void> => {
  await logger(LogTypeEnum.LOG, message, ctx);
};

export const error = async (message: string, ctx?: MyContext): Promise<void> => {
  await logger(LogTypeEnum.ERROR, message, ctx);
};

async function logger(type: LogTypeEnum, message: string, ctx?: MyContext): Promise<void> {
  const userId = ctx ? `[${ctx?.chat?.id}]` : '[root]';
  if (environment.isProd) {
    const typedMessage = `${type} ${userId} ${message}`;
    await bot.api.sendMessage(environment.logChannel, typedMessage, {
      parse_mode: "HTML"
    });
    return;
  }
  console.log(type, userId, message);
}