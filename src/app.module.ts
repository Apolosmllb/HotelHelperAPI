import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmCoreModule } from "@nestjs/typeorm/dist/typeorm-core.module";
import { PaymentModule } from './payment/payment.module';
import { Pay } from "./payment/pay.entity";
import { PaymentService} from "./payment/payment.service";
import { PaymentController} from "./payment/payment.controller";
import { CatalogueModule } from './catalogue/catalogue.module';
import { ServiceManagementModule } from './service-management/service-management.module';
import { Inventory } from './service-management/inventory.entity';
import { Searching } from './catalogue/searching.entity';
import { BookingModule } from './booking/booking.module';
import { Booking } from './booking/booking.entity';
import { Customer } from './booking/customer.entity';
import { Hotel } from './booking/hotel.entity';
import { Room } from './booking/room.entity';

@Module({
  imports:

    [TypeOrmCoreModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username:'root',
    password:'1234',
    database:'hotelhelper',
    entities:[Pay,Inventory,Searching,Booking],
    synchronize: true,
    dropSchema:false,
  }),
      PaymentModule,
      CatalogueModule,
      ServiceManagementModule,
      BookingModule,



  ],
  controllers: [AppController ],
  providers: [AppService],

})
export class AppModule {}
