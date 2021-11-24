import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Booking } from './booking.entity';
@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id:number;
  @Column({name: 'first_name'})
  firstName : string;
  @Column({name:'last_name'})
  lastName: string;
  @Column({name:'street'})
  street: string;
  @Column({name:'city'})
  city: string;
  @Column({name:'phone_number'})
  phoneNumber:number;

  @OneToOne(type => Booking)
  @JoinColumn()
  photo: Booking;

}
