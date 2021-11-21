import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { response } from 'express';
import { Plan } from './plan.entity';

@Controller('Plan')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}
  @Post()
  async createPlan(@Res() response, @Body() Plan: Plan) {
    const newPLan = await this.subscriptionService.createplan(Plan);
    return response.status(HttpStatus.CREATED).json({ newPLan });
  }
  @Get()
  async fetchAll(@Res() response) {
    const plan = await this.subscriptionService.findAll();
    return response.status(HttpStatus.OK).json({ Plan });
  }
  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const Plan = await this.subscriptionService.createplan(id);
    return response.status(HttpStatus.CREATED).json({ Plan });
  }
}
