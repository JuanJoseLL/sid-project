export class CreateAttendeeDto {
    readonly username: string;
    readonly fullName: string;
    readonly relationType: string;
    readonly email: string;
    readonly city: {
      readonly name: string;
      readonly department: string;
      readonly country: string;
    };
    readonly isEmployee: boolean;
  }