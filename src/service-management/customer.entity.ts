import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('first_name')
  firstName: string;
  @Column('last_name')
  lastName: string;
  @Column('room_number')
  roomNumber: number;
  @Column('phone_number')
  phoneNumber: number;
}
