import { exec } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function buildProject(id: string) {
    return new Promise((resolve) => {
        const finalPath = path.join(__dirname.replace("/service","/"), `projects/${id}`);
        const child = exec(`cd ${finalPath} && npm install && npm run build`);

        child.stdout?.on('data', function(data) {
            console.log('stdout: ' + data);
        });
        child.stderr?.on('data', function(data) {
            console.log('stderr: ' + data);
        });

        child.on('close', function(code) {
           resolve("");
        });
    });
}