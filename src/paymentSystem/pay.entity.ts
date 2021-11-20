import { Column,Entity,PrimaryGeneratedColumn } from 'typeorm';
@Entity('pays')
export class Pay {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('payment_amount')
  paymentAmount:string;
  @Column('payment_method')
  paymentMethod:string;
  @Column('payment_date')
  paymentDate:number;
}
