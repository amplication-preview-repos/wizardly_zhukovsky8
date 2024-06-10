import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type ReminderUpdateInput = {
  event?: EventWhereUniqueInput | null;
  message?: string | null;
  triggerTime?: Date | null;
};
