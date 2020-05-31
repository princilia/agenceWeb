export class Clients {
  idclient: number;
  numeroCli: string;
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  telephone: string;
  constructor(idclient, numeroCli, nom, prenom, email, adresse, telephone) {
    this.idclient = idclient;
    this.numeroCli = numeroCli;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.adresse = adresse;
    this.telephone = telephone;
  }
}
