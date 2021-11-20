import { Body, Controller, HttpStatus,Param,Post,Get, Res } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { Pay } from "./pay.entity";

@Controller('pays')
export class PaymentController {
  constructor(private readonly paymentService:PaymentService) {}
  @Post()
  async createPay(@Res() response,@Body() pay:Pay){
    const newPay = await this.paymentService.createPay(pay);
    return response.status(HttpStatus.CREATED).json({newPay});
  }

}
