export interface Jwt {
  admin: boolean;
  email: string;
  exp: number;
  iat: number;
  nom: string;
  prenom: string;
}
