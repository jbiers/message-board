import 'dotenv/config';

export const config = {
    db : {
        host: 'practice-database.cn7q10ddqyf1.us-east-1.rds.amazonaws.com',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'sql_messages',
    }
}