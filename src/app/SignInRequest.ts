
export class SignInRequest{
  Name: string;
  Role: string;
 
  constructor(name: string = "", role: string = "") {
    this.Name = name;
    this.Role = role;
  }
}