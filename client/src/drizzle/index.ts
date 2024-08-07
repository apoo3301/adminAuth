import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const DATABASE_URL = "postgresql://whriv_owner:R4PumBqQOwt7@ep-broad-hall-a5hm2ebb.us-east-2.aws.neon.tech/auth_db?sslmode=require";

const sql = neon(DATABASE_URL);
const db = drizzle(sql, { schema });

export default db;