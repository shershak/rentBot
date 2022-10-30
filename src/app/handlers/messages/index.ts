import { Composer } from "grammy";
import { MyContext } from "../../types/my-context.type";
import text from "./text";

const composer = new Composer<MyContext>();

composer.use(text);

export default composer;