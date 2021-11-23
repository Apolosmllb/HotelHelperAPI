import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  bookingId:number;
  @Column('date')
  date:number;
  @Column('description')
  description:string;
}
export const enum BookingStatus {
  UNPAID,
  PAID,
  CHECKEDIN,
  CHECKEDOUT,
  CLOSED
}