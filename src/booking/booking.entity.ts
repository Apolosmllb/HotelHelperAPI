import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from './hotel.entity';
import { Customer } from './customer.entity';
import { Room } from './room.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('date')
  date:number;
  @Column('description')
  description:string;

  @OneToMany(type => Hotel, hotel.booking);
  hotels: Hotel[];

  @ManyToOne(type => Room, rooms => room.booking)
  rooms: Room[];

  @OneToOne(type => Customer)
  @JoinColumn()
  photo: Customer;


}
