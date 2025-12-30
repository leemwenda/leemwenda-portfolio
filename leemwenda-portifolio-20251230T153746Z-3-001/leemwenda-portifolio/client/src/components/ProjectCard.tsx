import { motion } from "framer-motion";
import { type Project } from "@shared/schema";
import { ExternalLink } from "lucide-react";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full rounded-2xl overflow-hidden glass-card"
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        boxShadow: "0 0 40px rgba(0, 255, 163, 0.3)"
      }}
    >
      {/* Animated glow background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <div className="text-4xl mb-2">🖼️</div>
              <p className="text-sm">Project Image</p>
            </div>
          </div>
        )}
        {/* Overlay with intense glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.link && (
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-primary/30 hover:bg-primary/30 hover:text-white transition-all neon-glow-green"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <motion.span 
              key={tag} 
              className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
