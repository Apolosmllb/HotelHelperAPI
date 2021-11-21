import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Searching } from './searching.entity';

@Injectable()
export class CatalogueService {
  constructor(
    @InjectRepository(Searching)
    private searchingRepository: Repository<Searching>,
  ) {}
  findAll(): Promise<Searching[]> {
    return this.searchingRepository.find();
  }
  findOne(id: string): Promise<Searching> {
    return this.searchingRepository.findOne(id);
  }
  createSearching(searching: Searching): Promise<Searching> {
    return this.searchingRepository.save(searching);
  }
}
