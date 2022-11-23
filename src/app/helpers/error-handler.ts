import { ErrorHandler, GrammyError, HttpError } from "grammy";
import { error } from "./logger.service";

export const errorHandler: ErrorHandler = async (err) => {
  const ctx = err.ctx;
  const errorMessage = `Error while handling update: ${ctx.update.update_id}`;
  await error(errorMessage);
  const e = err.error;
  if (e instanceof GrammyError) {
    const grammyErrorMessage = `Error in request: ${JSON.stringify(e.description)}`;
    await error(grammyErrorMessage);
  } else if (e instanceof HttpError) {
    const httpErrorMessage = `Could not contact Telegram: ${JSON.stringify(e)}`;
    error(httpErrorMessage);
  } else {
    const unknownErrorMessage = `Unknown error: ${JSON.stringify(e)}`;
    error(unknownErrorMessage);
  }
}