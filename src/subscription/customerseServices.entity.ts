import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('customers')
export class CustomerService {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name:'first_name'})
  firstName: string;
  @Column({ name:'last_name'})
  lastName: string;
  @Column({ name:'PLan_service'})
  PlanrService: number;
  @Column({ name:'phone_number'})
  phoneNumber: number;
  @Column({ name:'us_id'})
  usid: number;
}
