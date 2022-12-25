import bot from "../../..";
import { environment } from "../../environments/environment";
import { LogTypeEnum } from "../models/log-type.enum";
import { MyContext } from "../types/my-context.type";

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
    const userId = this._context ? `[${this._context?.chat?.id}]` : '[system]';
    const time = `[${new Date().toTimeString().slice(0, 8)}]`;
    const logMessage = `${type} ${time} ${userId} ${message}`;
    if (environment.isProd) {
      await bot.api.sendMessage(environment.logChannel, logMessage, {
        parse_mode: "HTML"
      });
      return;
    }
    console.log(logMessage);
  }
}