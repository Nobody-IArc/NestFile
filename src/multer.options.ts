import { randomUUID } from 'crypto';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

export const multerOption = {
  storage: diskStorage({
    // ^ 디스크에 저장
    destination: join(__dirname, '..', 'uploads'), // 파일 저장 경로 설정
    filename: (req, file, callback) => {
      // ^ 파일 이름 설정
      callback(null, randomUUID() + extname(file.originalname));
    },
  }),
};
