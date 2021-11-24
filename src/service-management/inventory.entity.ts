import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('inventories')
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'amount' })
  amount: number;
  @Column({ name: 'is_vailable' })
  isAvailable: boolean;

}
