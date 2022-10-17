import { Menu } from '@grammyjs/menu';
import { GrammyError, HttpError } from 'grammy';
import { ParseMode } from 'grammy/out/types.node';
import { bot } from './src/app/bot';
import commands from './src/app/handlers/commands';
import messages from './src/app/handlers/messages';
import { errorHandler } from './src/app/helpers/errorHandler';
import { log } from './src/app/helpers/log';
import privateChatRestriction from './src/app/helpers/private-chat-restriction';
import getUserLanguage from './src/app/middleware/get-user-language';
import menus from './src/app/middleware/menus';
import { LocaleService } from './src/app/services/locale.service';
import { environment } from './src/environments/environment';

bot.use(privateChatRestriction); // private chat middelware
bot.use(getUserLanguage); 
bot.use(menus); //menus middleware
bot.use(commands); // command middleware
bot.use(messages); // messages middleware

bot.catch(errorHandler);
bot.start({
  onStart: async () => {
    await log('Bot started!')
  }
});

export default bot;
