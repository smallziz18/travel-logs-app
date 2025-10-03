import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";

export const location = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  userId: int().notNull().references(() => user.id, { onDelete: "cascade" }),
  description: text(),
  lat: real().notNull(),
  lng: real().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
