import { Composer, NextFunction } from "grammy";
import { Logger } from "../../helpers/logger.service";
import { MyContext } from "../../types/my-context.type";

const composer = new Composer<MyContext>();
const logger = async (ctx: MyContext, next: NextFunction) => {
  ctx.logger = new Logger(ctx);
  await next();
}
composer.use(logger)
export default composer;

