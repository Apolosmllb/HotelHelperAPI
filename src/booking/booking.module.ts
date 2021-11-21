import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './booking.entity';
import { Customer } from './customer.entity';
import { Hotel } from './hotel.entity';
import { Room } from './room.entity';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Booking,Customer,Hotel,Room])],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
