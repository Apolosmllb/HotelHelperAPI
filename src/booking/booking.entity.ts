import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from './hotel.entity';
import {Room } from './room.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('date')
  date:number;
  @Column('description')
  description:string;

  @ManyToOne(type => Hotel, hotel => hotel.id)
  @JoinColumn()
  hotel: Hotel;

  @ManyToOne(type => Room,room => room.id)
  @JoinColumn()
  room: Room;
}
