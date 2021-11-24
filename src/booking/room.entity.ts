import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';
@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id:number;
  @Column({name:'type'})
  roomType:string;
  @Column({name:'price'})
  Price:number;
  @Column({name:'room_number'})
  roomNumber:number;
  @Column({name:'is_available'})
  isAvailable:boolean;

  @OneToMany(()=>Booking,booking=>booking.rooms)
  booking:Booking
}

