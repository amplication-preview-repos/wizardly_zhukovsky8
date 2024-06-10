import { NotificationCreateNestedManyWithoutEventsInput } from "./NotificationCreateNestedManyWithoutEventsInput";
import { ReminderCreateNestedManyWithoutEventsInput } from "./ReminderCreateNestedManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventCreateInput = {
  description?: string | null;
  endTime?: Date | null;
  location?: string | null;
  notifications?: NotificationCreateNestedManyWithoutEventsInput;
  reminders?: ReminderCreateNestedManyWithoutEventsInput;
  startTime?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
