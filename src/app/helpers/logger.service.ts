import bot from "../../..";
import { LogTypeEnum } from "../models/log-type.enum";
import { MyContext } from "../types/my-context.type";
import { isProduction } from "./env-helper";

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
    if (isProduction()) {
      await bot.api.sendMessage(Number(process.env.LOG_CHANNEL_ID), logMessage);
      return;
    }
    console.log(logMessage);
  }
}