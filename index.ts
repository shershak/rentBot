import { GrammyError, HttpError } from 'grammy';
import { ParseMode } from 'grammy/out/types.node';
import { bot } from './src/app/bot';
import commands from './src/app/handlers/commands';
import messages from './src/app/handlers/messages';
import { errorHandler } from './src/app/helpers/errorHandler';
import { log } from './src/app/helpers/log';
import privateChatRestriction from './src/app/helpers/private-chat-restriction';
import { LocaleService } from './src/app/services/locale.service';
import { environment } from './src/environments/environment';

export const localeService = new LocaleService(); 

bot.use(privateChatRestriction); // private chat middelware
bot.use(commands); // command middelware
bot.use(messages); // messages middelware

bot.catch(errorHandler);
bot.start({
  onStart: async () => {await log('Bot started!')}
});

export default bot;
