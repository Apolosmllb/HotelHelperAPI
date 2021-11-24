import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';
import { Booking } from './booking.entity';
import { type } from 'os';
@Entity('hotels')
export class Hotel {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('hotel_name')
  hotelName:string;
  @Column('hotel_street')
  hotelStreet:string;
  @Column('hotel_city')
  hotelCity:string;
  @Column('hotel_category')
  hotelCategory:string;

  @OneToMany(type=>Booking, bookings => bookings.booking);
  hotels:Hotel;

}

