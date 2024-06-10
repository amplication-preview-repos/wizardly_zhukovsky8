import { Notification } from "../notification/Notification";
import { Reminder } from "../reminder/Reminder";
import { User } from "../user/User";

export type Event = {
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  location: string | null;
  notifications?: Array<Notification>;
  reminders?: Array<Reminder>;
  startTime: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
