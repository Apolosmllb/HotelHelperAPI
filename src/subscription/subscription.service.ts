import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription } from './Subscription.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private PlanRepository: Repository<Subscription>,
  ) {}
  findAll(): Promise<Subscription[]> {
    return this.PlanRepository.find();
  }
  findOne(id: string): Promise<Subscription> {
    return this.PlanRepository.findOne(id);
  }
  createplan(Plan: Subscription): Promise<Subscription> {
    return this.PlanRepository.save(Plan);
  }
}
