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
import {Pay} from "./pay.entity";

@Controller('pays')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  @Post()
  async createPay(@Res() response, @Body() pay:Pay){
    const newPay = await this.paymentService.createPay(pay);
    return response.status(HttpStatus.CREATED).json({newPay});
  }
  @Get()
  async fetchAll(@Res() response){
    const pays = await this.paymentService.findAll();
    return response.status(HttpStatus.OK).json({pays});
  }
  @Get('/:id')
  async findById(@Res() response, @Param('id') id){
    const pay = await this.paymentService.createPay(id);
    return response.status(HttpStatus.CREATED).json({pay});
  }
}
