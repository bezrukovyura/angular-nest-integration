import { ApiProperty } from '@nestjs/swagger';
import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { UserBase, UserRole } from '../../../shared/typings';

/*
 * Base User entity, stored in InMemoryDB
 */
export interface User extends InMemoryDBEntity {
  password?: string;
  salt?: string;
  login: string;
  email: string;
  role: UserRole;
}

/*
 * User class for Swagger usage - duplicates features of User interface
 * Need until new version of nest/swagger is released
 */
export class UserDto implements Required<UserBase> {
  id: number;

  @ApiProperty()
  login: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  role: UserRole;
}
