import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Searching } from './searching.entity';
import { CatalogueService } from './catalogue.service';
import { CatalogueController } from './catalogue.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Searching])],
  providers: [CatalogueService],
  controllers: [CatalogueController],
})
export class CatalogueModule {}
