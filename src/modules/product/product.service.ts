import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: createProductDto,
    });
    return product;
  }

  async findAll() {
    const product = await this.prisma.product.findMany();
    return product;
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
    return product;
  }

  async remove(id: string) {
    const product = await this.prisma.product.delete({ where: { id } });
    return product;
  }
}
