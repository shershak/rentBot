import { bot } from './src/app/bot';
import commands from './src/app/handlers/commands';
import messages from './src/app/handlers/messages';
import { errorHandler } from './src/app/helpers/error-handler';
import { Logger } from './src/app/helpers/logger.service';
import privateChatRestriction from './src/app/helpers/private-chat-restriction';
import menus from './src/app/middleware/menus';
import sessions from './src/app/middleware/sessions';
import i18n from './src/app/middleware/i18n';
import logger from './src/app/middleware/logger';

bot.use(privateChatRestriction); // private chat middelware
bot.use(sessions); // session
bot.use(logger); // logger to context
bot.use(i18n) // local from session and translate
bot.use(menus); //menus middleware
bot.use(commands); // command middleware
bot.use(messages); // messages middleware

bot.catch(errorHandler);
bot.start({
  onStart: () => new Logger().log('Bot started!')
});

export default bot;
