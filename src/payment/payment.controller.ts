import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from './payment.entity';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  @Post()
  async createPay(@Res() response, @Body() pay: Payment) {
    const newPay = await this.paymentService.createPay(pay);
    return response.status(HttpStatus.CREATED).json({ newPay });
  }
  @Get()
  async fetchAll(@Res() response) {
    const payments = await this.paymentService.findAll();
    return response.status(HttpStatus.OK).json({ payments });
  }
  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const payment = await this.paymentService.createPay(id);
    return response.status(HttpStatus.CREATED).json({ payment });
  }
}
