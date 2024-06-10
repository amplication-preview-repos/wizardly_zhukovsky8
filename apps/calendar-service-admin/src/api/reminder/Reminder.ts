import { Event } from "../event/Event";

export type Reminder = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  message: string | null;
  triggerTime: Date | null;
  updatedAt: Date;
};
