import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Inventory } from './inventory.entity';
import { ServiceManagementService } from './service-management.service';
import { ServiceManagementController } from './service-management.controller';
import { Service } from './services.entity';
import { Request } from './request.entity';
import { CustomerService } from './customerservice.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Inventory,CustomerService,Request,Service])],
  providers: [ServiceManagementService],
  controllers: [ServiceManagementController],
})
export class ServiceManagementModule {}