import { Composer } from "grammy";
import text from "./text";

const composer = new Composer();

composer.use(text);

export default composer;