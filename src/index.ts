import {createClient,commandOptions} from 'redis';

const subscriber = createClient();
subscriber.connect();

async function main() {
    console.log("Starting Deployer...");
    while(1){
        const response = await subscriber.brPop(
            commandOptions({isolated: true}),
            'project-queue',
            0
        );
        console.log(response);
    }
}

main();