import { Injectable } from '@nestjs/common';
import { Donasi, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DonasiService {
  constructor(private prisma: PrismaService) {}

  async oneById(byId: Prisma.DonasiWhereUniqueInput): Promise<Donasi | null> {
    return this.prisma.donasi.findUnique({
      where: byId,
    });
  }

  async pagelist(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DonasiWhereUniqueInput;
    where?: Prisma.DonasiWhereInput;
    orderBy?: Prisma.DonasiOrderByWithRelationInput;
  }): Promise<Donasi[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.donasi.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.DonasiCreateInput): Promise<Donasi> {
    return this.prisma.donasi.create({
      data,
    });
  }

  async createMany(
    data: Prisma.DonasiCreateInput[]
  ): Promise<Prisma.BatchPayload> {
    return await this.prisma.donasi.createMany({
      data,
      skipDuplicates: true,
    });
  }

  async update(params: {
    where: Prisma.DonasiWhereUniqueInput;
    data: Prisma.DonasiUpdateInput;
  }): Promise<Donasi> {
    const { where, data } = params;
    return this.prisma.donasi.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.DonasiWhereUniqueInput): Promise<Donasi> {
    return this.prisma.donasi.delete({
      where,
    });
  }
}
