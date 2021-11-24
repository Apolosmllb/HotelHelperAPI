import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('customers')
export class CustomerService {
  @PrimaryGeneratedColumn()
  id:number;
  @Column({ name:'first_name'})
  firstName: string;
  @Column({ name:'last_name'})
  lastName: string;
  @Column({ name:'phone_number'})
  phoneNumber:number;
}