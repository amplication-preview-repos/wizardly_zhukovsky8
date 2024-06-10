import { SortOrder } from "../../util/SortOrder";

export type ReminderOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  triggerTime?: SortOrder;
  updatedAt?: SortOrder;
};
