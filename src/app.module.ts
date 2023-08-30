import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { MenuModule } from './modules/menu/menu.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [ProductModule, MenuModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
