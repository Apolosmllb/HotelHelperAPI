import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('planes')
export class usersubscription {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'us_id' })
  us_id: string;
  @Column({ name: 'type_plan' })
  TypePlane: string;
  @Column({ name: 'plan_category' })
  PLanCategory: string;
  @Column({ name: 'status' })
  status: boolean;
}
