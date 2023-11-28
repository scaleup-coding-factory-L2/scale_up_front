import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';

const currentDir = path.dirname(new URL(import.meta.url).pathname);
const correctedPath = process.platform === 'win32' ? currentDir.substring(1) : currentDir;
dotenv.config({ path: path.resolve(correctedPath, '../../.env') });

const uri = process.env.MONGODB_URI || '';

if (!uri) {
    throw new Error('MONGODB_URI is not defined in the .env file');
}

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
}

run().catch(console.error);
