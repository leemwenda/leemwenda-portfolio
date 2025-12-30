import { motion } from "framer-motion";
import { type Skill } from "@shared/schema";
import { Code2, Server, Wrench, Terminal } from "lucide-react";

const icons: Record<string, any> = {
  frontend: Code2,
  backend: Server,
  tools: Wrench,
  support: Wrench,
  security: Terminal,
  other: Terminal,
};

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = icons[skill.category] || Terminal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card group cursor-pointer"
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{skill.name}</h3>
        <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:text-white group-hover:bg-primary/30 group-hover:shadow-[0_0_20px_rgba(0,255,163,0.3)] transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="progress-glow">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="progress-glow-fill"
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground font-mono">
          <span>Mastery</span>
          <span className="text-primary font-bold">{skill.proficiency}%</span>
        </div>
      </div>
    </motion.div>
  );
}
