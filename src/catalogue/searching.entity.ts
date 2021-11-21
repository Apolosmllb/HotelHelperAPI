import { Column,Entity,PrimaryGeneratedColumn } from 'typeorm';
@Entity('searches')
export class Searching {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'searching_title'})
  searchingTitle:string;
  @Column({name:'searching_date'})
  searchingDate:string;
  @Column({name:'searching_available'})
  searchingAvailable:boolean;
}
