import { Controller, Post, Body } from '@nestjs/common';
import { Product } from '../schemas/product.schema';
import { AddProductDTO } from './dto/addProduct.dto';
import { ProductService } from './product.service';

@Controller('/api/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  public async addProduct(
    @Body() addProductDTO: AddProductDTO,
  ): Promise<Product> {
    try {
      const product = await this.productService.add(addProductDTO);
      return product;
    } catch (err) {
      return err;
    }
  }
}
