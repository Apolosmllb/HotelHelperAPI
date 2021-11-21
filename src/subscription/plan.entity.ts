import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('planes')
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'plane_name'})
  planeName: string;
  @Column({name:'plan_price'})
  planPrice: string;
  @Column({name:'type_plan'})
  TypePlane: string;
  @Column({name:'is_available'})
  IsAvailable: boolean;
  @Column({name:'plan_category'})
  PLanCategory: string;
  @Column({name:'deadline'})
  deadline: boolean;

}
