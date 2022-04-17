import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../schemas/product.schema';
import { AddProductDTO } from './dto/addProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async add(addProduct: AddProductDTO): Promise<Product> {
    const newProduct = await this.productModel.create({ ...addProduct });
    return newProduct.save();
  }
}
