import { Request } from 'express';
import { v4 as uuid } from 'uuid';

export const fileNamer = (
  req: Request,
  file: Express.Multer.File,
  callback: (error: Error | null, acceptFile: string) => void,
): void => {
  if (!file) return callback(new Error('File is empty'), '');

  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${uuid()}.${fileExtension}`;

  callback(null, fileName);
};
