// filepath: /Users/dhruvratanjayaswal/Desktop/Deployer/Deployer/src/index.ts
import { connectClients } from './redisClient.js';
import { deploy } from './deployer.js';

async function main() {
    await connectClients();
    await deploy();
}

main();