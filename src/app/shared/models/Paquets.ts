import {Clients} from './Clients';

export class Paquets {
  idPaquets: number;
  clientEnvoie: Clients ;
  clientReceptionne: Clients;
  description: string;
  numeropack: string;
  volume: string;
  chargement: string;
  etatPaye: boolean;
  dateArriver: Date;
  dateEnvoie: Date;
  dateReception: Date;
  destination: string;
  constructor(idPaquets, clientEnvoie, clientReceptionne, description, numeropack, volume, chargement, etatPaye, dateArriver, dateEnvoie, dateReception, destination ) {
   this.idPaquets = idPaquets;
   this.clientEnvoie = clientEnvoie;
   this.clientReceptionne = clientReceptionne;
   this.description = description;
   this.numeropack = numeropack;
   this.volume = volume;
   this.chargement = chargement;
   this.etatPaye = etatPaye;
   this.dateArriver = dateArriver;
   this.dateEnvoie = dateEnvoie;
   this.dateReception = dateReception;
   this.destination = destination;
  }
}
