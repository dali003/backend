// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ApiController } from './api/api.controller';

// @Module({
//   imports: [],
//   controllers: [AppController, ApiController],
//   providers: [AppService],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { ApiController } from './api/api.controller';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [],
})
export class AppModule {}

