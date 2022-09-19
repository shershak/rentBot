import { Bot } from 'grammy';
import { getBotToken } from './src/app/helpers/helpers';
import { LocaleService } from './src/app/services/locale.service';

// can we export to another file?
const locale = new LocaleService();

const TOKEN: string = getBotToken();
const bot = new Bot(TOKEN);

bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'));
let message = locale.translate('Hello');
bot.on('message', (ctx) => ctx.reply(message));

bot.start();
bot.catch((error) => {console.log(error)});
console.log('Bot started!');