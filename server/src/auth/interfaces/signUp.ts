import { ApiProperty } from '@nestjs/swagger';
import { Login } from './login';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { SignUpBase } from '../../../../shared/login';

export class SignUp extends Login implements Required<SignUpBase> {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  confirmPassword: string;
}
