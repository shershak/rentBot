import { GrammyError, HttpError } from 'grammy';
import { ParseMode } from 'grammy/out/types.node';
import { bot } from './src/app/bot';
import commands from './src/app/handlers/commands';
import messages from './src/app/handlers/messages';
import privateChatRestriction from './src/app/helpers/private-chat-restriction';
import { LocaleService } from './src/app/services/locale.service';
import { environment } from './src/environments/environment';

export const localeService = new LocaleService(); 

bot.use(privateChatRestriction); // private chat middelware
bot.use(commands); // command middelware
bot.use(messages); // messages middelware

bot.start({
  onStart: () => console.log('Bot started!')
});

//TODO: create error handler
bot.catch((error) => {
  if (error instanceof GrammyError) {
    console.error("Error in request:", error.description);
  } else if (error instanceof HttpError) {
    console.error("Could not contact Telegram:", error);
  } else {
    console.error("Unknown error:", error);
  }
});

export default bot;
