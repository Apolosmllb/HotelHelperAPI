import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('hotels')
export class Hotel {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('name')
  name:string;
  @Column('hotel_city')
  city:string;
  @Column('category')
  category:string;

}

