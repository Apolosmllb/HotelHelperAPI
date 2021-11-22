import { Column,Entity,PrimaryGeneratedColumn } from 'typeorm';
@Entity('pays')
export class Pay {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'payment_amount'})
  paymentAmount:string;
  @Column({name:'payment_method'})
  paymentMethod:string;
  @Column({name:'payment_date'})
  paymentDate:string;
}
