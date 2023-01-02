import { Composer } from "grammy";
import { MyContext } from "../../types/my-context";
import logger from "./logger";

const composer = new Composer<MyContext>();
composer.use(logger);
export default composer;