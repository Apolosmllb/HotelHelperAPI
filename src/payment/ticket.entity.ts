import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}