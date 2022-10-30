import { Composer } from "grammy";
import { MyContext } from "../../types/my-context.type";
import i18n from "./i18n";

const composer = new Composer<MyContext>();

composer.use(i18n);

export default composer;