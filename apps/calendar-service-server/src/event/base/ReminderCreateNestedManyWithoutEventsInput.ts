/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ReminderWhereUniqueInput } from "../../reminder/base/ReminderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReminderCreateNestedManyWithoutEventsInput {
  @Field(() => [ReminderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReminderWhereUniqueInput],
  })
  connect?: Array<ReminderWhereUniqueInput>;
}

export { ReminderCreateNestedManyWithoutEventsInput as ReminderCreateNestedManyWithoutEventsInput };
