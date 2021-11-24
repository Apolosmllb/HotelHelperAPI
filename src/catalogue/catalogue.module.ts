import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Searching } from './searching.entity';
import { CatalogueService } from './catalogue.service';
import { CatalogueController } from './catalogue.controller';
import { Result } from './results.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Searching,Result])],
  providers: [CatalogueService],
  controllers: [CatalogueController],
})
export class CatalogueModule {}
