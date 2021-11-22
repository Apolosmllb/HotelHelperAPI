import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('requests')
export class Request {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'request_product_name'})
  productName:string;
  @Column({name:'product_product_Amount'})
  productAmount:number;
  @Column({name:'product_request_Available'})
  productAvailable:boolean;
}
