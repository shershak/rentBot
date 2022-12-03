import { Context, SessionFlavor } from "grammy";
import { SessionData } from "../middleware/sessions/models/session-data.model";
import { I18nFlavor } from "@grammyjs/i18n";
import { LoggerType } from "./logger.type";

export type MyContext = Context &
  SessionFlavor<SessionData> &
  I18nFlavor &
  LoggerType;