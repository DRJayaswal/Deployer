import path from 'path';
import getAllFiles from './getAllFiles';
import uploadFile from './uploadFiles';

export function copyFinalDist(id: string) {
    const folderPath = path.join(__dirname, `output/${id}/dist`);
    const allFiles = getAllFiles(folderPath);
    allFiles.forEach(async(file:string) => {
        await uploadFile(`dist/${id}/` + file.slice(folderPath.length + 1), file);
    })
}

