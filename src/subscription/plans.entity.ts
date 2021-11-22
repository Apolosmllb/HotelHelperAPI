import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('planes')
export class usersubscription {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'plane_name' })
  planeName: string;
  @Column({ name: 'plan_price' })
  planPrice: string;
  @Column({ name: 'plan_duration' })
  PLanDuration: string;
}
