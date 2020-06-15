export class Clients {
  idClient: number;
  numeroCli: string;
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  telephone: string;
  constructor(idClient, numeroCli, nom, prenom, email, adresse, telephone) {
    this.idClient = idClient;
    this.numeroCli = numeroCli;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.adresse = adresse;
    this.telephone = telephone;
  }
}
