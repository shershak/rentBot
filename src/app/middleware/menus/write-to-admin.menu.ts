import { Menu } from "@grammyjs/menu";
import { MyContext } from "../../types/my-context";
import mainMenu from "./main.menu";
import { MenuEnum } from "./menu.enum";

const writeToAdminMenu = new Menu<MyContext>(MenuEnum.WRITE_TO_ADMIN)
  .back((ctx) => ctx.translate('back'), ctx => {
    ctx.menu.back();
    const text = ctx.translate('hello-message');
    ctx.editMessageText(text);
  });


export default writeToAdminMenu;