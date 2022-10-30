import { Composer } from "grammy";
import { MyContext } from "../../types/my-context.type";
import getUserLanguage from "./get-user-language";

const composer = new Composer<MyContext>();

composer.use(getUserLanguage);

export default composer;