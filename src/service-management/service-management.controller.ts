import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ServiceManagementService } from './service-management.service';
import { Inventory } from './inventory.entity';

@Controller('products')
export class ServiceManagementController {
  constructor(private readonly productService: ServiceManagementService) {}
  @Post()
  async createProduct(@Res() response, @Body() product:Inventory){
    const newProduct = await this.productService.createProduct(product);
    return response.status(HttpStatus.CREATED).json({newProduct});
  }
  @Get()
  async fetchAll(@Res() response){
    const products = await this.productService.findAll();
    return response.status(HttpStatus.OK).json({products});
  }
  @Get('/:id')
  async findById(@Res() response, @Param('id') id){
    const product = await this.productService.createProduct(id);
    return response.status(HttpStatus.CREATED).json({product});
  }
}
