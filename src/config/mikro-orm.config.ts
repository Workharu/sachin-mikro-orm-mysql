import { Options } from "@mikro-orm/core";
import { User, Post, Comment } from "../entities/user";

import { MySqlDriver } from "@mikro-orm/mysql";

const config: Options = {
  entities: [User, Post, Comment],
  driver: MySqlDriver,
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5507,
  migrations: {
    path: "src//migrations",
    disableForeignKeys: false,
  },
};

export default config;
