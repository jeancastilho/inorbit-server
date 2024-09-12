import { pgTable } from "drizzle-orm/pg-core";
import { PgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import {createId} from '@paralleldrive/cuid2'

/* para gerar o comando/arquivos migrations das tabelas usar o comando 'npx drizzle-kit generate' e para fazer a migração usar o 'npx drizzle-kit migrate'
   Para visualizar as tabelas pela GUI usar o 'npx drizzle-kit studio'
   O cuid2 é um algoritmo para gerar id's unicos
*/

export const goals = pgTable('goals',{
    id: text('id').primaryKey().$defaultFn(() => createId()),
    title: text('title').notNull(),
    desiredWeeklyFrequency: integer('desired_weekly_frequency').notNull(),
    createdAt: timestamp('created_at', {withTimezone: true}).notNull().defaultNow(),
})

export const goalCompletions = pgTable('goal_completions', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    goalId: text('goal_id').references(() => goals.id).notNull(),
    createdAt: timestamp('created_at', {withTimezone: true}).notNull().defaultNow(),
})