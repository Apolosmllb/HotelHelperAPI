import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from './hotel.entity';
import {Room } from './room.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('booking_date')
  bookingDate:number;
  @Column('booking_description')
  bookingDescription:string;

  @ManyToOne(type => Hotel, Hotel => Hotel.id)
  @JoinColumn()
  hotel: Hotel;
  @ManyToOne(type => Room)
  @JoinColumn()
  room: Room;
}
