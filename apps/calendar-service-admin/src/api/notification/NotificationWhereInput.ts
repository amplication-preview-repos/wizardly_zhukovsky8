import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NotificationWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
  notificationTime?: DateTimeNullableFilter;
  recipient?: StringNullableFilter;
};
