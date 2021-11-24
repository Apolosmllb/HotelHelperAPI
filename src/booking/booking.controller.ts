import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking.entity';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService:BookingService) {}
  @Post()
  async createBooking(@Res() response, @Body() booking:Booking){
    const newBooking = await this.bookingService.createBooking(booking);
    return response.status(HttpStatus.CREATED).json({newBooking});
  }
  @Get()
  async fetchAll(@Res() response){
    const bookings = await this.bookingService.findAll();
    return response.status(HttpStatus.OK).json({bookings})
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id){
    const booking = await this.bookingService.createBooking(id);
    return response.status(HttpStatus.CREATED).json({booking});
  }
}
