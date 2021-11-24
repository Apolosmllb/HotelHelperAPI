import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Result } from './results.entity';

@Entity('searches')
export class Searching {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'title'})
  title:string;
  @Column({name:'date'})
  date:string;
  @Column({name:'is_available'})
  is_available:boolean;

  @ManyToOne(()=>Result,results=>results.searches)
  results:Result[];
}
