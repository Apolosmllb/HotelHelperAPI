import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('planes')
export class plans {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'price' })
  price: string;
  @Column({ name: 'duration' })
  duration: string;
}
