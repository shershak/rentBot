import { Bot } from "grammy";
import { Logger } from "./helpers/logger.service";
import { MyContext } from "./types/my-context.type";

const TOKEN = process.env.BOT_TOKEN;
if (!TOKEN) new Logger().error('You should provide bot token!');
export const bot = new Bot<MyContext>(TOKEN!);