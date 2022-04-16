import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AppConstant } from './common/constant/app.constant';
import { UserModule } from './user/user.module';

const dbUrlString = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;
console.log(dbUrlString, 'dbUrlString');
@Module({
  imports: [
    JwtModule.register({
      secret: AppConstant.secret_key_access_token,
      signOptions: { expiresIn: AppConstant.AccessTokenExpiresIn },
    }),
    MongooseModule.forRoot(dbUrlString),
    UserModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes();
  }
}
