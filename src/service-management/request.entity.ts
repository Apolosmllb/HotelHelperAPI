import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('requests')
export class Request {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'amount' })
  amount: number;
  @Column({ name: 'description' })
  description: number;
}
