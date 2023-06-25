export interface User{
  id: number;
  email: string;
  password: string;
  admin: boolean;
  nom: string;
  prenom: string;
  image: string;
  nb_repas: number;
  conso_calorie: number;
  conso_lipide: number;
  conso_glucide: number;
  conso_proteine: number;
}
