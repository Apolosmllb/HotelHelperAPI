import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Inventory } from './inventory.entity';
import { ServiceManagementService } from './service-management.service';
import { ServiceManagementController } from './service-management.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Inventory])],
  providers: [ServiceManagementService],
  controllers: [ServiceManagementController],
})
export class ServiceManagementModule {}