import { subscriber, publisher } from './redisClient';
import { commandOptions } from 'redis';
import { fileURLToPath } from "url";
import path from "path";
import buildProject from "./service/buildProject.js";
// import downloadS3Project from './service/downloadS3Project.js';

export async function deploy() {
    console.log("Starting Deployer...");
    while (1) {
        console.log("Waiting for a project in the queue...");
        const response = await subscriber.brPop(
            commandOptions({ isolated: true }),
            'projectQ',
            0
        );
        if (!response) {
            console.error("No project available for deployment.");
            throw new Error("No project available for deployment.");
        }
        console.log("Received project:", response);
        const id = response.element;
        console.log("Project ID:", id);

        const sourcePath = fileURLToPath(import.meta.url);
        const destination = path.dirname(sourcePath).replace("/src", "/dist") + `/projects/${id}`;
        console.log("Destination path:", destination);

        console.log("Project Downloading from S3...");
        // await downloadS3Project(destination);
        console.log("Project Downloaded from S3.");

        console.log("Project Creating on machine...");
        await buildProject(id);
        console.log("Project Created on machine.");

        console.log("Copying Final distribution...");
        // copyFinalDist(id);
        console.log("Copied Final distribution.");

        console.log("Updating project status...");
        await publisher.hSet("status", id, "deployed");
        console.log("Updated project status.");
    }
}