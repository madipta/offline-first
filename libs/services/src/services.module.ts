import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { DonasiService } from './donasi/donasi.service';

@Module({
  controllers: [],
  providers: [PrismaService, DonasiService],
  exports: [PrismaService, DonasiService],
})
export class ServicesModule {}
