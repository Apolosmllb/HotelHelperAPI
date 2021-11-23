import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";
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
}

