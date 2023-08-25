import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "./user/user.entity";
import * as dotenv from 'dotenv';

dotenv.config();

export const Appdatasource:DataSourceOptions = {

    type: "postgres",
    host:  "db.ozjhnxplutqcsmxyopyt.supabase.co",//process.env.DB_HOST,
    port: 5432,
    username:"postgres",// process.env.DB_USER,
    password: "PkSgfSrKSngVotwo",// process.env.DB_PASSWORD,
    database: "postgres",// process.env.DATABAS,
    synchronize: false,
    ssl: {
        rejectUnauthorized: false,
      },
    entities: [User],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    subscribers: []

}
const dataSource = new DataSource(Appdatasource)

export default dataSource;