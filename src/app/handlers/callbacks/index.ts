import { Composer } from "grammy";
import { MyContext } from "../../types/my-context";
import back from "./back";
import confirmAdminMessage from "./confirm-admin-message";
import notHandled from "./not-handled";

const callbacks = new Composer<MyContext>();

callbacks.use(back);
callbacks.use(confirmAdminMessage)
callbacks.use(notHandled);

export default callbacks;