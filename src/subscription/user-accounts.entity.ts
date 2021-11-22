import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('planes')
export class usersubscription {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id' })
  user_id: string;
  @Column({ name: 'acc_id' })
  acc_id: string;
}
