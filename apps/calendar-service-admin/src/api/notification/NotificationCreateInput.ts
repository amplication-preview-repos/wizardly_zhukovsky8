import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type NotificationCreateInput = {
  event?: EventWhereUniqueInput | null;
  message?: string | null;
  notificationTime?: Date | null;
  recipient?: string | null;
};
