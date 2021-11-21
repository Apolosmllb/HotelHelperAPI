import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";
@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('room_type')
  roomType:string;
  @Column('room_price')
  roomPrice:number;
  @Column('room_service')
  roomService:boolean;
  @Column('room_number')
  roomNumber:number;
  @Column('is_available')
  isAvailable:boolean;
}

