import { Column,Entity,PrimaryGeneratedColumn } from 'typeorm';
@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'payment_amount'})
  paymentAmount:string;
  @Column({name:'payment_method'})
  paymentMethod:string;
  @Column({name:'payment_date'})
  paymentDate:string;
}
