import { Composer } from "grammy";
import { MyContext } from "../../types/my-context.type";
import sessions from "./sessions";

const composer = new Composer<MyContext>();

composer.use(sessions);

export default composer;