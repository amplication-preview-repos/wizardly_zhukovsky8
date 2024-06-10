import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type ReminderCreateInput = {
  event?: EventWhereUniqueInput | null;
  message?: string | null;
  triggerTime?: Date | null;
};
