import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id:number;
  @Column({ name:'service_id'})
  serviceId : number;
  @Column({ name:'service_hotel_id'})
  serviceHotelId: number;
  @Column({ name:'service_name'})
  serviceNumber:string;
  @Column({ name:'service_type'})
  serviceType:string;
  @Column({ name:'service_description'})
  serviceDescription:string;
}
