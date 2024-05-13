
const { db } = require('@vercel/postgres');

require('dotenv').config({ path: './.env.local'});

async function main() {

    const client = await db.connect();

    try {
    await client.sql`
        CREATE TABLE IF NOT EXISTS test (
            id SERIAL PRIMARY KEY,
            name varchar(255) NOT NULL
        );
    `;
    } catch(error) {
        console.log(`error seeding data ${error}`);
    }
    
    await client.end();
}

main();