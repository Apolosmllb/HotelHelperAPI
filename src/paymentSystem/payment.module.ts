import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import {Pay} from "./pay.entity";
import { PaymentService } from './payment.service';

@Module({
  imports:[TypeOrmModule.forFeature([Pay])],
  providers: [PaymentService],
})
export class PaymentModule {}
