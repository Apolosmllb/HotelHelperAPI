import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Searching } from './searching.entity';

@Entity('results')
export class Result  {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'name_result'})
  title:string;
  @Column({name:'date'})
  date:string;
  @Column({name:'is_available'})
  is_available:boolean;

  @OneToMany(()=>Searching,searches=>searches.results)
  searches:Searching[]

}
