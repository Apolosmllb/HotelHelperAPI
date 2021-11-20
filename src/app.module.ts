import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmCoreModule } from "@nestjs/typeorm/dist/typeorm-core.module";
import { PaymentModule } from './paymentSystem/payment.module';
import { Pay } from "./paymentSystem/pay.entity";
import { PaymentController } from './paymentSystem/payment.controller';

@Module({
  imports: [TypeOrmCoreModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username:'root',
    password:'1234',
    database:'hotelhelper',
    entities:[Pay],
    synchronize: true,
    dropSchema:false,
  }),
    PaymentModule,
  ],
  controllers: [AppController, PaymentController],
  providers: [AppService],
})
export class AppModule {}
