import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="event.id" reference="Event" label="event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <TextInput label="message" multiline source="message" />
        <DateTimeInput label="notificationTime" source="notificationTime" />
        <TextInput label="recipient" source="recipient" />
      </SimpleForm>
    </Edit>
  );
};
