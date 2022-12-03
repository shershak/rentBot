import bot from "../../..";
import { environment } from "../../environments/environment";
import { LogTypeEnum } from "../models/log-type.enum";
import { MyContext } from "../types/my-context.type";


// TODO: delete all this functions
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

export class Logger {
  private _context: MyContext | undefined;
  constructor(context?: MyContext) {
    this._context = context;
  }

  public async log(message: string): Promise<void> {
    await this.logger(LogTypeEnum.LOG, message);
  }

  public async error(message: string): Promise<void> {
    await this.logger(LogTypeEnum.ERROR, message);
  }

  private async logger(type: LogTypeEnum, message: string): Promise<void> {
    const userId = this._context ? `[${this._context?.chat?.id}]` : '[root]';
    if (environment.isProd) {
      // TODO: add time
      const typedMessage = `${type} ${userId} ${message}`;
      await bot.api.sendMessage(environment.logChannel, typedMessage, {
        parse_mode: "HTML"
      });
      return;
    }
    // TODO: add time
    console.log(type, userId, message);
  }
}