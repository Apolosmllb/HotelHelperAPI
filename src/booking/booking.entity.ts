import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from './hotel.entity';
import {Room } from './room.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  bookingId:number;
  @Column('date')
  date:number;
  @Column('description')
  description:string;

  @ManyToOne(type => Hotel)
  @JoinColumn()
  hotel: Hotel;
  @ManyToOne(type => Room)
  @JoinColumn()
  room: Room;
}
