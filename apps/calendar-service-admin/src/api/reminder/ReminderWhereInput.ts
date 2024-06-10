import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ReminderWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
  triggerTime?: DateTimeNullableFilter;
};
