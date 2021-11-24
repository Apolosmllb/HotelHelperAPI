import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Payment } from './payment.entity';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'type'})
  type:string;
  @Column({name:'date'})
  date:string;
  @Column({name:'amount'})
  amount:number;

  @OneToOne(()=>Payment,payment=>payment.ticket)
  payment:Payment
}