import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";

export const ReminderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="event.id" reference="Event" label="event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <TextInput label="message" multiline source="message" />
        <DateTimeInput label="triggerTime" source="triggerTime" />
      </SimpleForm>
    </Create>
  );
};
