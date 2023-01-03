import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DonasiService, ServicesModule } from '@offline-first/services';
import { DonasiResolver } from './resolvers/donasi.resolver';

@Module({
  imports: [
    ServicesModule,
    GraphQLModule.forRoot<ApolloDriverConfig >({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'prisma/schema.gql'),
      installSubscriptionHandlers: true,
    }),
  ],
  providers: [DonasiService, DonasiResolver],
})
export class GqlModule {}
