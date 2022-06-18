
export class Login{

  username: string;
  pass: string;

  constructor(args: any = {}){
    this.username = args.username;
    this.pass = args.pass;
  }
}
