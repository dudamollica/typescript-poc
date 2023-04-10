import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
var Pool = pg.Pool;
var configDatabase = {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
};
var db = new Pool(configDatabase);
export default db;
