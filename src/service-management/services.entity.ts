import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id:number;
  @Column({ name:'type'})
  type:string;
  @Column({ name:'description'})
  description:string;
}
