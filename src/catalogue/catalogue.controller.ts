import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Searching } from './searching.entity';
import { CatalogueService } from './catalogue.service';

@Controller('searches')
export class CatalogueController {
  constructor(private readonly catalogueService: CatalogueService) {}
  @Post()
  async createSearching(@Res() response, @Body() searching: Searching) {
    const newSearching = await this.catalogueService.createSearching(searching);
    return response.status(HttpStatus.CREATED).json({ newSearching });
  }
  @Get()
  async fetchAll(@Res() response) {
    const searches = await this.catalogueService.findAll();
    return response.status(HttpStatus.OK).json({ searches });
  }
  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const search = await this.catalogueService.createSearching(id);
    return response.status(HttpStatus.CREATED).json({ search });
  }
}