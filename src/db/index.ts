import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from './schema'
import { env } from "../env";

//Cria a conexão com o BD

export const client = postgres(env.DATABASE_URL)
export const db = drizzle(client, {schema, logger: true})