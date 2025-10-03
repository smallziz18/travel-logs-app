import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { location } from "./location";

export const locationLog = sqliteTable("locationLog", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  lat: real().notNull(),
  lng: real().notNull(),
  userId: int().notNull().references(() => user.id, { onDelete: "cascade" }),
  locationId: int().notNull().references(() => location.id),
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
