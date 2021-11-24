import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';
import { Booking } from './booking.entity';
import { type } from 'os';
// @ts-ignore
@Entity('hotels')
export class Hotel {
  @PrimaryGeneratedColumn()
  id:number;
  @Column({name:'name'})
  hotelName:string;
  @Column({name:'street'})
  hotelStreet:string;
  @Column({name:'city'})
  hotelCity:string;
  @Column({name:'category'})
  hotelCategory:string;

  @OneToMany(()=>Booking, bookings => bookings.hotels)
  booking:Booking[];

}

