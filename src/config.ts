import { config } from "dotenv";

config();

export default {
  port: process.env.PORT || 3000,
  host: process.env.HOST,
  user: process.env.USERDB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};
