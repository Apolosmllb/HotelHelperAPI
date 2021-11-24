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

  @OneToMany(type => Hotel, hotel => hotel.id)
  hotels: Hotel[];

  @OneToMany(type => Room, room => room.id)
  rooms: Room[];

  @OneToOne(type => Customer)
  @JoinColumn()
  photo: Customer;


}
