import { Composer, InlineKeyboard } from 'grammy';
import { CommandsEnum } from '../../models/commands.enum';
import { MyContext } from '../../types/my-context.type';

const composer = new Composer<MyContext>();
composer.command(CommandsEnum.ADDPOST, async (ctx) => {
  if (!ctx.from) {
    return;
  }
  
});
export default composer;