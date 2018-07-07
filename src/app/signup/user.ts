export class User {
  constructor(
    public email_id: string,
    public password: string,
    public user_name?: string,
    public mobile_no?: string,
    public city?: string,
    public gender?: string,
    public address?: string
  ) {}
}
