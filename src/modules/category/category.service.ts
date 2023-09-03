import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.prisma.categorie.create({
      data: createCategoryDto,
    });

    return category;
  }

  async findAll() {
    const categories = await this.prisma.categorie.findMany();

    return categories;
  }

  async findOne(id: string) {
    const category = await this.prisma.categorie.findUnique({
      where: { id },
    });
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.prisma.categorie.update({
      where: { id },
      data: updateCategoryDto,
    });
    return category;
  }

  async remove(id: string) {
    const category = await this.prisma.categorie.delete({
      where: { id },
    });
    return category;
  }
}
