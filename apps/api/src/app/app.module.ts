import { Module } from '@nestjs/common';
import { GqlModule } from '@offline-first/gql';

@Module({
  imports: [GqlModule],
  controllers: [],
})
export class AppModule {}
