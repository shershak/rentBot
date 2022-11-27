import { UserStatus } from "../../../models/user-status.enum";

export interface SessionData {
  __language_code: string;
  status: UserStatus;
}