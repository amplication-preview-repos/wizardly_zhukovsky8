import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { ReminderListRelationFilter } from "../reminder/ReminderListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventWhereInput = {
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  reminders?: ReminderListRelationFilter;
  startTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
