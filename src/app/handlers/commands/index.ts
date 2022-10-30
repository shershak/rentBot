import { Composer } from "grammy";
import { MyContext } from "../../types/my-context.type";
import languages from "./languages";
import start from "./start";

const composer = new Composer<MyContext>();

composer.use(start);
composer.use(languages);

export default composer;