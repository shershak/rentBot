import { Bot } from "grammy";
import { getBotToken } from "./helpers/get-bot-token"
import { MyContext } from "./types/my-context.type";

const TOKEN = getBotToken();
export const bot = new Bot<MyContext>(TOKEN);