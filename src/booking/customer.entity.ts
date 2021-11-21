import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('first_name')
  firstName : string;
  @Column('last_name')
  lastName: string;
  @Column('street')
  street: string;
  @Column('city')
  city: string;
  @Column('postal_code')
  postalCode: number;
  @Column('phone_number')
  phoneNumber:number;
}
