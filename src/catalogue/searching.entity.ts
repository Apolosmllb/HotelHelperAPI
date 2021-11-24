import { Column,Entity,PrimaryGeneratedColumn } from 'typeorm';
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
}
