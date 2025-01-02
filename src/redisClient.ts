import { createClient } from 'redis';

export const publisher = createClient();
export const subscriber = createClient();

export async function connectClients() {
    await publisher.connect();
    await subscriber.connect();
}