import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // 'frontend', 'backend', 'tools', 'other'
  proficiency: integer("proficiency").notNull(), // 0-100
  icon: text("icon"), // Lucide icon name or image URL
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  link: text("link"),
  tags: text("tags").array().notNull(),
  featured: boolean("featured").default(false),
});

// === BASE SCHEMAS ===
export const insertSkillSchema = createInsertSchema(skills).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });

// === EXPLICIT API CONTRACT TYPES ===
export type Skill = typeof skills.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

// Request types
export type CreateSkillRequest = InsertSkill;
export type CreateProjectRequest = InsertProject;

// Response types
export type SkillResponse = Skill;
export type ProjectResponse = Project;
export type SkillsListResponse = Skill[];
export type ProjectsListResponse = Project[];
