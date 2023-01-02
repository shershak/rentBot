import { Composer, session } from "grammy";
import { DEFAULT_LOCALE } from "../../consts";
import { UserStatusEnum } from "../../models/user-status.enum";
import { MyContext } from "../../types/my-context";
import { SessionData } from "./models/session-data.model";

const composer = new Composer<MyContext>();
composer.use(session({
  initial: () => ({ 
    __language_code: DEFAULT_LOCALE,
    userStatus: UserStatusEnum.DEFAULT
  } as SessionData),
  // TODO: Add mongo storage
  // storage: 
}));
export default composer;