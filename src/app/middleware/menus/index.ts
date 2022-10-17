import { Composer } from "grammy";
import changeLanguageMenu from "./languages";

const composer = new Composer();

composer.use(changeLanguageMenu);

export default composer;