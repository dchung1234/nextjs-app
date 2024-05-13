import { sql } from '@vercel/postgres';

export default function Page() {
    return <h1>Helllo Page</h1>
    // try {
    // const result = await sql`
    //     SELECT COUNT(*) FROM USERS;
    // `
    // const c = result.rows[0].count;

    // return (
    //     <h1>
    //         Counting Users: {c}
    //     </h1>
    // );
    // } catch(error) {
    //     throw new Error('Failed to retrieve data from Users table. ');
    // }
    
}