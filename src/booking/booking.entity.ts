import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from './hotel.entity';
import { Customer } from './customer.entity';
import { Room } from './room.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id:number;
  @Column({name:'date'})
  date:number;
  @Column({name:'description'})
  description:string;

  @ManyToOne(() => Hotel, hotel=>hotel.booking)
  hotels: Hotel[];

  @ManyToOne( ()=>Room, room => room.booking)
  rooms: Room[];

  @OneToOne(type => Customer)
  @JoinColumn()
  customer: Customer;




}
