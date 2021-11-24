import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ticket } from './ticket.entity';
@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'amount'})
  paymentAmount:string;
  @Column({name:'method'})
  paymentMethod:string;
  @Column({name:'date'})
  paymentDate:string;


  @OneToOne(()=>Ticket,ticket=>ticket.payment)
  @JoinColumn()
  ticket:Ticket;
}
