import { IsString, MinLength } from 'class-validator';
import { LoginUserDto } from './login-user.dto';

export class CreateUserDto extends LoginUserDto {
  @IsString()
  @MinLength(1)
  fullName: string;
}
