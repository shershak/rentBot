import { Composer } from 'grammy';
import { MyContext } from '../../types/my-context';

const composer = new Composer<MyContext>();
composer.on("message::bot_command", (ctx) => {
  ctx.reply(`${ctx.message?.text} unknown command!`)
});

export default composer;