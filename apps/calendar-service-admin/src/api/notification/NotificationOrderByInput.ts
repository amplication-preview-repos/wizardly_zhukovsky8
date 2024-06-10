import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  notificationTime?: SortOrder;
  recipient?: SortOrder;
  updatedAt?: SortOrder;
};
