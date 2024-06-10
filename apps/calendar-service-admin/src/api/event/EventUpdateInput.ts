import { NotificationUpdateManyWithoutEventsInput } from "./NotificationUpdateManyWithoutEventsInput";
import { ReminderUpdateManyWithoutEventsInput } from "./ReminderUpdateManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventUpdateInput = {
  description?: string | null;
  endTime?: Date | null;
  location?: string | null;
  notifications?: NotificationUpdateManyWithoutEventsInput;
  reminders?: ReminderUpdateManyWithoutEventsInput;
  startTime?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
