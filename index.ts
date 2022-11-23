import { bot } from './src/app/bot';
import commands from './src/app/handlers/commands';
import messages from './src/app/handlers/messages';
import { errorHandler } from './src/app/helpers/error-handler';
import { log } from './src/app/helpers/logger.service';
import privateChatRestriction from './src/app/helpers/private-chat-restriction';
import userLanguage from './src/app/middleware/user-language';
import menus from './src/app/middleware/menus';
import sessions from './src/app/middleware/sessions';
import i18n from './src/app/middleware/i18n';

bot.use(privateChatRestriction); // private chat middelware
bot.use(sessions); // session
bot.use(i18n) // local from session
bot.use(userLanguage); // TODO: delete ----------
bot.use(menus); //menus middleware
bot.use(commands); // command middleware
bot.use(messages); // messages middleware

bot.catch(errorHandler);
bot.start({
  onStart: () => log('Bot started!')
});

export default bot;
