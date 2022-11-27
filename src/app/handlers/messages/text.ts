import { Composer, InlineKeyboard } from 'grammy';
import { log } from '../../helpers/logger.service';
import changeLanguageMenu from '../../middleware/menus/languages.menu';
import { UserStatus } from '../../models/user-status.enum';
import { MyContext } from '../../types/my-context.type';
const composer = new Composer<MyContext>();

const filter = composer.filter(ctx => ctx.chat?.type === 'private');//TODO: delete
filter.on("message:text", (ctx) => {
  let message = ctx.translate('hello-world');
  if (ctx.session.status === UserStatus.DEFAULT) {
    ctx.reply(message);
  }
  //if status = msg_for_admin_listen 
  //send confirm text with buttons  
});

export default composer;