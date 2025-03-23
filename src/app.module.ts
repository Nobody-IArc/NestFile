import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'; // 정적 파일 서비스 사용을 위한 모듈
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // 실제 파일의 경로
      serveRoot: '/uploaded-file', // 파일에 접근 시 url 뒤에 붙는 경로 지정
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
