import { Composer } from "grammy";
import { MyContext } from "../../types/my-context";
import notHandled from "./not-handled";
import text from "./text";

const messages = new Composer<MyContext>();

messages.use(text);
messages.use(notHandled);

export default messages;