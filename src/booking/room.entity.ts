import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';
@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id:number;
  @Column({name:'type'})
  type:string;
  @Column({name:'price'})
  price:number;
  @Column({name:'number'})
  number:number;
  @Column({name:'is_available'})
  isAvailable:boolean;

  @OneToMany(()=>Booking,booking=>booking.rooms)
  booking:Booking
}

