import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id:number;
  @Column('service_id')
  serviceId : number;
  @Column('service_hotel_id')
  serviceHotelId: number;
  @Column('service_name')
  serviceNumber:string;
  @Column('service_type')
  serviceType:string;
  @Column('service_description')
  serviceDescription:string;
}
