import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { multerOption } from './multer.options';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upload-file')
  @UseInterceptors(FileInterceptor('file', multerOption))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    // 디스크 저장 테스트를 위해 buffer 사용 제거
    // console.log(file.buffer.toString('utf-8'));
    console.log(file);
    return `${file.originalname} Upload File Check http://localhost:3000/uploaded-file/${file.filename}`;
  }
}
