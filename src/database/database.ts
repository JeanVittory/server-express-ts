import mysql from "promise-mysql";
import envVariables from "../config";

const connection = mysql.createConnection({
  host: envVariables.host,
  user: envVariables.user,
  password: envVariables.password,
  database: envVariables.database,
});

export { connection };
