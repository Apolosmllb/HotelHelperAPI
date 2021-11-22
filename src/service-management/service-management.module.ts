import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Inventory } from './inventory.entity';
import { ServiceManagementService } from './service-management.service';
import { ServiceManagementController } from './service-management.controller';
import { Customer } from './customer.entity';
import { Service } from './services.entity';
import { Room } from './rooms.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Inventory,Customer,Room,Service])],
  providers: [ServiceManagementService],
  controllers: [ServiceManagementController],
})
export class ServiceManagementModule {}