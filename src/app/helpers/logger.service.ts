import bot from "../../..";
import { environment } from "../../environments/environment";
import { LogTypeEnum } from "../models/log-type.enum";

export const log = async (message: string): Promise<void> => {
  await logger(LogTypeEnum.LOG, message);
};

export const error = async (message: string): Promise<void> => {
  await logger(LogTypeEnum.ERROR, message);
};

async function logger(type: LogTypeEnum, message: string): Promise<void> {
  if (environment.isProd) {
    const typedMessage = `${type} ${message}`;
    await bot.api.sendMessage(environment.logChannel, typedMessage, {
      parse_mode: "HTML"
    });
    return;
  }

  console.log(type, message);
}