import {createClient,commandOptions} from 'redis';
import { error } from "console";
import { fileURLToPath } from "url";
import path from "path";
import downloadS3Project from './service/downloadS3Project.js';
import buildProject from "./service/buildProject.js";

const publisher = createClient();
publisher.connect();
const subscriber = createClient();
subscriber.connect();


async function main() {
    console.log("Starting Deployer...");
    while (1) {
        const response = await subscriber.brPop(
            commandOptions({ isolated: true }),
            'project-queue',
            0
        );
        if (!response) {
            throw new Error("No project available for deployment.");
        }
        console.log(response);
        const id = response.element;
        const sourcePath = fileURLToPath(import.meta.url);
        const destination = path.dirname(sourcePath).replace("/src", "/dist") + `/projects/${id}`;

        // Commented this out till i have an aws account
        // await downloadS3Project(destination);
        
        await buildProject(id);

        // Commented this out till i have an aws account
        // copyFinalDist(id);
        publisher.hSet("status", id, "deployed")
    }
}

main();
