import { Composer, session } from "grammy";
import { DEFAULT_LOCALE } from "../../consts";
import { UserStatus } from "../../models/user-status.enum";
import { MyContext } from "../../types/my-context.type";

const composer = new Composer<MyContext>();
composer.use(session({
  initial: () => ({ 
    __language_code: DEFAULT_LOCALE,
    status: UserStatus.DEFAULT
  }),
  // TODO: Add mongo storage
  // storage: 
}));
export default composer;