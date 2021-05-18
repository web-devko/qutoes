import * as path from 'path';
import {diskStorage} from 'multer';
import { v4 as uuidv4 } from 'uuid';

export function storageDir() {
    return path.join(__dirname, '../../storage');
}

export function multerStorage() {
    return diskStorage({
        destination: path.join(storageDir(), 'product-photos'),
        filename: (req, file, cb) => {
            const filename: string = uuidv4();
            const extension: string = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`)
        }
    })
}
