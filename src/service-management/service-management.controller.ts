import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ServiceManagementService } from './service-management.service';
import { Inventory } from './inventory.entity';

@Controller('inventories')
export class ServiceManagementController {
  constructor(private readonly productService: ServiceManagementService) {}
  @Post()
  async createProduct(@Res() response, @Body() inventory:Inventory){
    const newInventory = await this.productService.createProduct(inventory);
    return response.status(HttpStatus.CREATED).json({newInventory});
  }
  @Get()
  async fetchAll(@Res() response){
    const inventories = await this.productService.findAll();
    return response.status(HttpStatus.OK).json({inventories});
  }
  @Get('/:id')
  async findById(@Res() response, @Param('id') id){
    const inventory = await this.productService.createProduct(id);
    return response.status(HttpStatus.CREATED).json({inventory});
  }
}
