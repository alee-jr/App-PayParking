import { IonDatetime } from '@ionic/angular';

export class Reserva{
    id?:string;
    data:IonDatetime;
    horario:IonDatetime;
    userId:string;
    parkId:string;

    constructor(data: IonDatetime, horario: IonDatetime, userId: string, parkId: string) {
        this.data = data;
        this.horario = horario;
        this.userId = userId;
        this.parkId = parkId;
    }
}