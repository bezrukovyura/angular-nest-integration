export type UserRole = 'admin' | 'user';

export interface UserBase {
  id: number;
  login: string;
  email: string;
  role: UserRole;
}
