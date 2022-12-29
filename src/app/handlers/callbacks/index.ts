import { Composer } from "grammy";
import { MyContext } from "../../types/my-context.type";
import back from "./back";
import nothandled from "./not-handled";

const composer = new Composer<MyContext>();

composer.use(back);
composer.use(nothandled);

export default composer;