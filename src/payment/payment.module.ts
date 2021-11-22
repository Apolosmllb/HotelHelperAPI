import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import {Pay} from "./pay.entity";
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { Ticket } from './ticket.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Pay,Ticket])],
  providers: [PaymentService],
  controllers: [PaymentController],


})
export class PaymentModule {}
