import { Injectable } from '@nestjs/common';
import { Payment } from "./payment.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private payRepository: Repository<Payment>,
    ){}
    findAll(): Promise<Payment[]>{
    return  this.payRepository.find();
    }
    findOne(id:string): Promise<Payment>{
    return this.payRepository.findOne(id);
    }
    createPay(payment:Payment): Promise<Payment>{
    return this.payRepository.save(payment);
    }
}

