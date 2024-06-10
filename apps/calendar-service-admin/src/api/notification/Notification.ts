import { Event } from "../event/Event";

export type Notification = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  message: string | null;
  notificationTime: Date | null;
  recipient: string | null;
  updatedAt: Date;
};
