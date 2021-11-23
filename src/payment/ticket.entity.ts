import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'type'})
  Type:string;
  @Column({name:'date'})
  Date:string;
  @Column({name:'amount'})
  Amount:number;
}