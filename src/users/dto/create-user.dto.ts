import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}
