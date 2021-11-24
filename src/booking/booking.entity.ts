import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from './hotel.entity';
import { Customer } from './customer.entity';
import { Room } from './room.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  bookingId:number;
  @Column('date')
  date:number;
  @Column('description')
  description:string;

  @OneToMany(type => Hotel, hotel => hotel.id) // note: we will create author property in the Photo class below
  hotels: Hotel[];
  @OneToMany(type => Customer, costumer => costumer.id) // note: we will create author property in the Photo class below
  customers: Customer[];
  @OneToMany(type => Room, room => room.id) // note: we will create author property in the Photo class below
  rooms: Room[];


}
