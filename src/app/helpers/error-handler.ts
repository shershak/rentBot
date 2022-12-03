import { ErrorHandler, GrammyError, HttpError } from "grammy";
import { Logger } from "./logger.service";

export const errorHandler: ErrorHandler = async (err) => {
  const logger = new Logger();
  const ctx = err.ctx;
  const errorMessage = `Error while handling update: ${ctx.update.update_id}`;
  await logger.error(errorMessage);
  const e = err.error;
  if (e instanceof GrammyError) {
    const grammyErrorMessage = `Error in request: ${JSON.stringify(e.description)}`;
    await logger.error(grammyErrorMessage);
  } else if (e instanceof HttpError) {
    const httpErrorMessage = `Could not contact Telegram: ${JSON.stringify(e)}`;
    logger.error(httpErrorMessage);
  } else {
    const unknownErrorMessage = `Unknown error: ${JSON.stringify(e)}`;
    logger.error(unknownErrorMessage);
  }
}