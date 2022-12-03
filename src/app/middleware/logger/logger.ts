import { Composer, NextFunction } from "grammy";
import { environment } from "../../../environments/environment";
import { Logger, log } from "../../helpers/logger.service";
import { LogTypeEnum } from "../../models/log-type.enum";
import { MyContext } from "../../types/my-context.type";

const composer = new Composer<MyContext>();
const logger = async (ctx: MyContext, next: NextFunction) => {
  ctx.logger = new Logger(ctx);
  await next();
}
composer.use(logger)
export default composer;

