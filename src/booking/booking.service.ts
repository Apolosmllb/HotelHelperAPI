import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Booking} from './booking.entity';
import {Repository } from 'typeorm';
import {Hotel} from './hotel.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,) {}
  findAll():Promise<Booking[]>{
    return this.bookingRepository.find();
  }
  findOne(id:string): Promise<Booking>{
    return this.bookingRepository.findOne(id);
  }
  createBooking(booking:Booking): Promise<Booking>{
    return this.bookingRepository.save(booking);
  }
}
