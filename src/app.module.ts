import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { User, UserSchema } from './auth/entities/user.entity';


@Module({
  imports: [
    AuthModule,

    ConfigModule.forRoot(), 

    MongooseModule.forRoot(process.env.MONGO_URI),
    
      MongooseModule.forFeature([
          { name: User.name, schema: UserSchema }
        ])
    ],

  controllers: [],
  providers: [],
})
export class AppModule {
  
}
