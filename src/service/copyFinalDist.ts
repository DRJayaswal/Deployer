import path from 'path';
import getAllFiles from './getAllFiles.js';
import uploadFile from './uploadFile.js';

export function copyFinalDist(id: string) {
    const folderPath = path.join(__dirname, `output/${id}/dist`);
    const allFiles = getAllFiles(folderPath);
    allFiles.forEach(async(file:string) => {
        await uploadFile(`dist/${id}/` + file.slice(folderPath.length + 1), file);
    })
}

