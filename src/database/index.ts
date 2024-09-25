import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "../config/mikro-orm.config";

export const connectDatabase = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);

  return orm;
};
