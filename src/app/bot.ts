import { Bot } from "grammy";
import { getBotToken } from "./helpers/get-bot-token"

const TOKEN = getBotToken();
export const bot = new Bot(TOKEN);