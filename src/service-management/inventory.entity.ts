import { Column,Entity,PrimaryGeneratedColumn } from 'typeorm';
@Entity('products')
export class Inventory {
  id: number;
  @Column({name:'product_name'})
  productName:string;
  @Column({name:'product_Amount'})
  productAmount:number;
  @Column({name:'product_Available'})
  productAvailable:boolean;
}
