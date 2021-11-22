import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'ticket_id'})
  ticketId:string;
  @Column({name:'ticket_type'})
  ticketType:string;
  @Column({name:'ticket_date'})
  ticketDate:string;
  @Column({name:'ticket_user_name'})
  ticketUserName:string;
  @Column({name:'ticket_amount'})
  ticketAmount:number;
}