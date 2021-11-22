import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('room_id')
  roomId : number;
  @Column('room_hotel_id')
  roomHotelId: number;
  @Column('room_number')
  roomNumber:number;
  @Column('room_category')
  roomCategory:string;
  @Column('room_type')
  roomType:string;
  @Column('room_description')
  roomDescription:string;
}
