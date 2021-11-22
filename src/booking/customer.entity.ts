import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  @Column({name:'postal_code'})
  postalCode: number;
  @Column({name:'phone_number'})
  phoneNumber:number;
}
