import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('planes')
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'plane_name' })
  planeName: string;
  @Column({ name: 'plan_price' })
  planPrice: string;
  @Column({ name: 'type_plan' })
  TypePlane: string;
  @Column({ name: 'is_available' })
  IsAvailable: boolean;
  @Column({ name: 'plan_category' })
  PLanCategory: string;
  @Column({ name: 'plan_duration' })
  status: boolean;
  @Column({ name: 'us_id' })
  usid: number;
}
