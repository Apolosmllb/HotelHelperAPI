import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';
@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('type')
  roomType:string;
  @Column('price')
  Price:number;
  @Column('room_number')
  roomNumber:number;
  @Column('is_available')
  isAvailable:boolean;

  @OneToMany(()=>Booking,booking=>booking.rooms)
  booking:Booking
}

