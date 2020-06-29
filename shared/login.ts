export interface LoginBase {
    login: string;
    password: string;
  }

  export interface SignUpBase extends LoginBase {
    email: string;
    confirmPassword: string;
  }
