import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { MenuModule } from './modules/menu/menu.module';
import { CategoryModule } from './modules/category/category.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [ProductModule, MenuModule, CategoryModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
