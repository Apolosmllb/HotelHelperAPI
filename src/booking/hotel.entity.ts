import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('hotels')
export class Hotel {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('hotel_name')
  hotelName:string;
  @Column('hotel_street')
  hotelStreet:string;
  @Column('hotel_city')
  hotelCity:string;
  @Column('hotel_category')
  hotelCategory:string;
}

