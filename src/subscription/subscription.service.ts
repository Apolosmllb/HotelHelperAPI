import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './plan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Plan)
    private PlanRepository: Repository<Plan>,
  ) {}
  findAll(): Promise<Plan[]> {
    return this.PlanRepository.find();
  }
  findOne(id: string): Promise<Plan> {
    return this.PlanRepository.findOne(id);
  }
  createplan(Plan: Plan): Promise<Plan> {
    return this.PlanRepository.save(Plan);
  }
}
