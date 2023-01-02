import { UserStatusEnum } from "../../../models/user-status.enum";

export interface SessionData {
  __language_code: string;
  userStatus: UserStatusEnum;
}