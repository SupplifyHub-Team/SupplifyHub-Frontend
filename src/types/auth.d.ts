interface IUser {
  id: string | number;
  email: string;
  name: string;
  role: "Admin" | "Suppliers" | "Clients" | "JobSeeker";
}

interface ILoginResponse {
  user: IUser;
  token: string;
}
interface IForgotPasswordResponse {
  message: string;
}

interface IRefreshResponse {
  token: string;
}

interface IRegisterResponse {
  message: string;
}

interface IJwtPayload {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string; // user id
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string; // username
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string; // email
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string; // role (e.g. Suppliers)
  "jti": string; // unique token id
  "exp": number; // expiration (Unix timestamp)
  "iss": string; // issuer
  "aud": string; // audience
}
