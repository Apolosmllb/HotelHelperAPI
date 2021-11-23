import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('planes')
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name' })
  Name: string;
  @Column({ name: 'price' })
  Price: string;
  @Column({ name: 'plan' })
  lane: string;
  @Column({ name: 'is_available' })
  IsAvailable: boolean;
  @Column({ name: 'category' })
  Category: string;
  @Column({ name: 'duration' })
  status: boolean;

}
