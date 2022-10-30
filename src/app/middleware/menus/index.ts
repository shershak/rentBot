import { Composer } from "grammy";
import { MyContext } from "../../types/my-context.type";
import changeLanguageMenu from "./languages.menu";

const composer = new Composer<MyContext>();

composer.use(changeLanguageMenu);

export default composer;