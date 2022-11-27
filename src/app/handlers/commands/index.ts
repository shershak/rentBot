import { Composer } from "grammy";
import { MyContext } from "../../types/my-context.type";
import languages from "./languages";
import start from "./start";
import addpost from "./add-post";
import admin from "./write-to-admin";

const composer = new Composer<MyContext>();

composer.use(start);
composer.use(languages);
composer.use(addpost);
composer.use(admin);

export default composer;