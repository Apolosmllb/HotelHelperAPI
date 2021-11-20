import { Injectable } from '@nestjs/common';
import { Pay } from "./pay.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Pay)
    private payRepository: Repository<Pay>,
    ){}
    findAll(): Promise<Pay[]>{
    return  this.payRepository.find();
    }
    findOne(id:string): Promise<Pay>{
    return this.payRepository.findOne(id);
    }
    createPay(pay:Pay): Promise<Pay>{
    return this.payRepository.save(pay);
    }
}
