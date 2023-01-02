import { Composer } from "grammy";
import { MyContext } from "../../types/my-context";
import languages from "./languages";
import start from "./start";
import addpost from "./add-post";
import notHanled from "./not-handled";

const commands = new Composer<MyContext>();

commands.use(start);
commands.use(languages);
commands.use(addpost);
commands.use(notHanled);

export default commands;