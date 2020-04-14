export class Login{
  environment: string;
  email: string;
  password: string;
  constructor(environment,email,password)
  {
    this.environment = environment;
    this.email = email;
    this.password = password;
  }

}
