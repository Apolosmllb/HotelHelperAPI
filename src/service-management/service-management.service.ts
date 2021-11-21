import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from './inventory.entity';

@Injectable()
export class ServiceManagementService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
  ){}
  findAll(): Promise<Inventory[]>{
    return  this.inventoryRepository.find();
  }
  findOne(id:string): Promise<Inventory>{
    return this.inventoryRepository.findOne(id);
  }
  createProduct(inventory:Inventory): Promise<Inventory>{
    return this.inventoryRepository.save(inventory);
  }
}
