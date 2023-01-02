import { Composer } from "grammy";
import { MyContext } from "../../types/my-context";
import changeLanguageMenu from "./languages.menu";
import mainMenu from "./main.menu";
import writeToAdmin from "./write-to-admin.menu";

const composer = new Composer<MyContext>();
composer.use(mainMenu);
composer.use(changeLanguageMenu)
composer.use(writeToAdmin);

export default composer;