import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { Booking } from './booking.entity';
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


}

