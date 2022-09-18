import { Bot } from "grammy";
import { getBotToken } from "./src/app/helpers/helpers";

const TOKEN: string = getBotToken();
const bot = new Bot(TOKEN);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();
bot.catch((error) => {console.log(error)});
console.log('Bot started!');