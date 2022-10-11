import { ErrorHandler, GrammyError, HttpError } from "grammy";
import { log } from "./log";

export const errorHandler: ErrorHandler = async (error) => {
  const ctx = error.ctx;
  let errorMessage = `Error while handling update: ${ctx.update.update_id}`;
  await log(errorMessage);
  const e = error.error;
  if (e instanceof GrammyError) {
    let grammyErrorMessage = `Error in request: ${JSON.stringify(e.description)}`;
    await log(grammyErrorMessage);
  } else if (e instanceof HttpError) {
    let httpErrorMessage = `Could not contact Telegram: ${JSON.stringify(e)}`;
    log(httpErrorMessage);
  } else {
    let unknownErrorMessage = `Unknown error: ${JSON.stringify(e)}`;
    log(unknownErrorMessage);
  }
}