import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class MenuService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMenuDto: CreateMenuDto) {
    const menu = await this.prisma.menu.create({
      data: createMenuDto,
    });
    return menu;
  }

  async findAll() {
    const menu = await this.prisma.menu.findMany();
    return menu;
  }

  async findOne(id: string) {
    const menu = await this.prisma.menu.findUnique({
      where: { id },
    });
    return menu;
  }

  async update(id: string, updateMenuDto: UpdateMenuDto) {
    const menu = await this.prisma.menu.update({
      where: { id },
      data: updateMenuDto,
    });
    return menu;
  }

  async remove(id: string) {
    const menu = await this.prisma.menu.delete({
      where: { id },
    });
    return menu;
  }
}
