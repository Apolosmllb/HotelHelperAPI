import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('booking_date')
  bookingDate:number;
  @Column('booking_description')
  bookingDescription:string;
}