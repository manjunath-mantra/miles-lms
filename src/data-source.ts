import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "./user/user.entity";
import * as dotenv from 'dotenv';

dotenv.config();

export const Appdatasource:DataSourceOptions = {

    type: "postgres",
    host:  process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DATABAS,
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