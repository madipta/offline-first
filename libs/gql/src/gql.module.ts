import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DonasiService, ServicesModule } from '@offline-first/services';
import { UserResolver } from './resolvers/donasi.resolver';

@Module({
  imports: [
    ServicesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'apps/api/src/schema.gql'),
      installSubscriptionHandlers: true,
    }),
  ],
  providers: [DonasiService, UserResolver],
  exports: [],
})
export class GqlModule {}
