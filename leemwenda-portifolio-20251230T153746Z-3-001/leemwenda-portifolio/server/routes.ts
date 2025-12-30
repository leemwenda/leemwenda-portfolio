import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Skills Routes
  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.post(api.skills.create.path, async (req, res) => {
    try {
      const input = api.skills.create.input.parse(req.body);
      const skill = await storage.createSkill(input);
      res.status(201).json(skill);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Projects Routes
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post(api.projects.create.path, async (req, res) => {
    try {
      const input = api.projects.create.input.parse(req.body);
      const project = await storage.createProject(input);
      res.status(201).json(project);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    await storage.createSkill({ name: "JavaScript", category: "frontend", proficiency: 85, icon: "Code" });
    await storage.createSkill({ name: "React", category: "frontend", proficiency: 80, icon: "Layout" });
    await storage.createSkill({ name: "Node.js", category: "backend", proficiency: 75, icon: "Server" });
    await storage.createSkill({ name: "Cybersecurity", category: "security", proficiency: 60, icon: "Shield" });
    await storage.createSkill({ name: "IT Support", category: "support", proficiency: 90, icon: "Wrench" });
  }

  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Portfolio Website",
      description: "A modern, neon-themed personal portfolio built with React and TailwindCSS.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      link: "#",
      tags: ["React", "Tailwind", "Animation"],
      featured: true
    });
    await storage.createProject({
      title: "Network Security Tool",
      description: "A Python-based utility for network vulnerability scanning and analysis.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      link: "#",
      tags: ["Python", "Security", "Networking"],
      featured: true
    });
    await storage.createProject({
      title: "IT Support Dashboard",
      description: "Ticketing system and asset management dashboard for IT departments.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "#",
      tags: ["Dashboard", "Fullstack", "Management"],
      featured: false
    });
  }
}
