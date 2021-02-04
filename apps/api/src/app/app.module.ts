import { Module } from '@nestjs/common';
import { GqlModule } from '@offline-first/gql';

@Module({
  imports: [GqlModule],
})
export class AppModule {}
