import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module';
import { PaymentModule } from './payment/payment.module';
import { Payment } from './payment/payment.entity';

import { CatalogueModule } from './catalogue/catalogue.module';
import { ServiceManagementModule } from './service-management/service-management.module';
import { Inventory } from './service-management/inventory.entity';
import { Searching } from './catalogue/searching.entity';

import { CustomerService } from './service-management/customerservice.entity';
import { Request } from './service-management/request.entity';
import { Service } from './service-management/services.entity';
import { Ticket } from './payment/ticket.entity';
import { Result } from './catalogue/results.entity';
import { Booking } from './booking/booking.entity';
import { Hotel } from './booking/hotel.entity';
import { Room } from './booking/room.entity';
import { Customer } from './booking/customer.entity';

@Module({
  imports: [
    TypeOrmCoreModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'hotelhelper',
      entities: [Booking,Payment, Inventory, Searching, CustomerService, Request,Service, Ticket,Result,Hotel,Room,Customer],
      synchronize: true,
      dropSchema: false,
    }),
    PaymentModule,
    CatalogueModule,
    ServiceManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
