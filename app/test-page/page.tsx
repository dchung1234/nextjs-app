import { sql } from '@vercel/postgres';

export default async function Page() {
    try {
    const result = await sql`
        SELECT COUNT(*) FROM USERS;
    `
    const c = result.rows[0].count;

    return (
        <div>
            Counting Users: {c}
        </div>
    );
    } catch(error) {
        throw new Error('Failed to retrieve data from Users table. ');
    }
    
}