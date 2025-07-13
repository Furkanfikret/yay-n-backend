import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {Pool} = pkg;
const pool = new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    ssl: {
    rejectUnauthorized: false
    }

})

export const dbTest =async () => {
    try {
        const res = await pool.query('select now()');
        console.log(`Veri tabanı bağlantısı başarılı ! `)
    } catch (error) {
        console.log(`Veri tabanı bağlantı Hatası ! - ${error}`);
    }
}

export default pool;