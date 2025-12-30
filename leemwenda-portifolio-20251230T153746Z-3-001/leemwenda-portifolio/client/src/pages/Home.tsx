import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ParticleBackground } from "@/components/ParticleBackground";
import { SocialLinks } from "@/components/SocialLinks";
import { useSkills } from "@/hooks/use-skills";
import { useProjects } from "@/hooks/use-projects";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ChevronDown, Loader2, Mail, Award, Briefcase, GraduationCap } from "lucide-react";
import profileImg from "@assets/WhatsApp_Image_2025-12-18_at_10.16.19_1766999611635.jpeg";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <div className="fixed inset-0 gradient-mesh -z-20" />
      <ParticleBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-6 text-center md:text-left z-10"
          >
            <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-4">
              Hello, I'm Lee Mwenda
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Computer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Specialist</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Dedicated IT Support Specialist & Cybersecurity Enthusiast creating robust digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a 
                href="#projects" 
                className="px-8 py-4 rounded-lg bg-primary text-black font-bold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(0,255,163,0.3)]"
              >
                View Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/5 transition-colors font-medium"
              >
                Contact Me
              </a>
            </div>
            
            <div className="pt-8 flex justify-center md:justify-start">
              <SocialLinks />
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center z-10"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Spinning border effect */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(0,207,255,0.15)] bg-card">
                <img 
                  src={profileImg} 
                  alt="Lee Mwenda" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-secondary rounded-full" />
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a dedicated and enthusiastic computer specialist with a strong foundation in IT support, intermediate programming skills, and a growing passion for cybersecurity. Over the past year, I have gained practical experience working at EIM Computers, where I specialized in repairing and selling laptops and computer accessories, honing both my technical expertise and customer service skills.
              </p>
              <p>
                Currently, I am pursuing a Diploma in Information Technology at KCA University, where I am further developing my knowledge in software, networking, and emerging technologies. I am deeply committed to continuous learning, and in my free time, I actively explore IT topics, practice programming, and expand my cybersecurity skills.
              </p>
              <p>
                In addition to my technical work, I have a passion for traveling and exploring new places, which fuels my creativity and problem-solving mindset. My professional goal is to combine my hands-on experience, programming abilities, and cybersecurity knowledge to contribute effectively in the IT field and grow into a well-rounded technology professional.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { label: "Experience", value: "1+ Years" },
                { label: "Projects", value: "10+" },
                { label: "Certifications", value: "5+" },
                { label: "Clients", value: "Happy :)" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Core competencies and technologies I master.
            </p>
          </div>

          {skillsLoading ? (
            <div className="flex justify-center p-12">
              <Loader2 className="w-12 h-12 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills?.map((skill, index) => (
                <SkillCard key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-full bg-gradient-to-r from-secondary/10 to-transparent -z-10" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-secondary">Work</span> Experience</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hands-on experience in IT support, repair, and customer service.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                company: "EIM Computers",
                role: "IT Support & Laptop Specialist",
                duration: "2023 - Present",
                description: "Specialized in laptop repair, hardware diagnosis, installation of accessories, and providing technical guidance to clients.",
                skills: ["Hardware Repair", "Customer Service", "Troubleshooting"]
              },
              {
                company: "KCA University",
                role: "IT Diploma Student",
                duration: "2023 - Present",
                description: "Pursuing a comprehensive diploma covering software, networking, cybersecurity, and emerging IT technologies.",
                skills: ["Software", "Networking", "Cybersecurity"]
              }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-muted-foreground font-mono text-sm">{exp.company}</p>
                  </div>
                  <Briefcase className="w-5 h-5 text-secondary opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-muted-foreground font-mono mb-3">{exp.duration}</p>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-mono border border-primary/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-full bg-gradient-to-l from-accent/10 to-transparent -z-10" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-accent">Education</span> & Learning</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Continuous learning in IT, cybersecurity, and programming.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                school: "KCA University",
                degree: "Diploma in Information Technology",
                status: "In Progress",
                focus: "Software Development, Networking, Cybersecurity"
              },
              {
                school: "Cisco Certified",
                degree: "Cybersecurity & Network Excellence",
                status: "Certified",
                focus: "Network Security, IT Infrastructure, System Hardening"
              }
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{edu.degree}</h3>
                    <p className="text-muted-foreground font-mono text-sm">{edu.school}</p>
                  </div>
                  <GraduationCap className="w-5 h-5 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs font-mono text-primary mb-3">{edu.status}</p>
                <p className="text-muted-foreground">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent -z-10" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications & <span className="text-accent">Achievements</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Professional badges and certifications earned through continuous learning.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Cisco Networking Basics",
                issuer: "Cisco Certified",
                date: "2024",
                icon: Award
              },
              {
                title: "Cybersecurity Essentials",
                issuer: "Cisco Academy",
                date: "2024",
                icon: Award
              },
              {
                title: "IT Support & Troubleshooting",
                issuer: "EIM Computers",
                date: "2023",
                icon: Award
              },
              {
                title: "System Administration",
                issuer: "KCA University",
                date: "2024",
                icon: Award
              }
            ].map((cert, i) => (
              <motion.a
                key={i}
                href="https://www.credly.com/users/lee-mwenda"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 group-hover:shadow-[0_0_30px_rgba(255,0,212,0.3)] transition-all">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                <p className="text-xs font-mono text-primary">{cert.date}</p>
                <div className="mt-4 pt-4 border-t border-white/10 w-full">
                  <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">View on Credly →</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-secondary">Projects</span></h2>
              <p className="text-muted-foreground">Some of my best work and experiments.</p>
            </div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-mono">
              View Github -&gt;
            </a>
          </div>

          {projectsLoading ? (
            <div className="flex justify-center p-12">
              <Loader2 className="w-12 h-12 animate-spin text-secondary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-accent/5 -z-10" />
        <div className="absolute top-1/3 right-0 w-1/3 h-1/2 bg-secondary/5 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm always interested in hearing about new projects and opportunities. Get in touch and let's build something amazing together!
              </p>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 space-y-6"
            >
              {/* Email Option */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-primary">Get In Touch</label>
                <motion.a
                  href="mailto:Leemwenda8714@gmail.com"
                  className="w-full flex items-center gap-3 px-6 py-4 bg-white/[0.05] backdrop-blur-md border border-primary/30 rounded-xl text-foreground font-medium hover:bg-primary/20 hover:border-primary/80 transition-all group"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,255,163,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-125 transition-transform" />
                  <div className="flex-1 text-left">
                    <p className="text-xs text-muted-foreground">Email Me Directly</p>
                    <p className="font-mono text-sm">Leemwenda8714@gmail.com</p>
                  </div>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </motion.a>
              </div>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-background/80 backdrop-blur text-muted-foreground">or</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-secondary">Connect On Social</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: "LinkedIn", url: "https://linkedin.com/in/lee-mwenda-b20897373", icon: "💼" },
                    { name: "GitHub", url: "https://github.com", icon: "🔗" },
                    { name: "Instagram", url: "https://instagram.com/_unco_biggie", icon: "📸" },
                    { name: "Twitter/X", url: "https://x.com/itscarsonleelit", icon: "𝕏" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] backdrop-blur border border-white/10 rounded-lg hover:bg-white/[0.08] hover:border-secondary/50 transition-all group text-sm font-medium"
                      whileHover={{ y: -2, boxShadow: "0 0 20px rgba(0,207,255,0.2)" }}
                    >
                      <span className="text-lg">{social.icon}</span>
                      <span className="flex-1">{social.name}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary">↗</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Credly Badges */}
              <div className="pt-4 border-t border-white/10">
                <label className="block text-sm font-semibold text-accent mb-3">My Credentials</label>
                <motion.a
                  href="https://www.credly.com/users/lee-mwenda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-accent/10 backdrop-blur border border-accent/30 rounded-lg hover:bg-accent/20 hover:border-accent/80 transition-all group text-sm font-medium text-accent"
                  whileHover={{ scale: 1.02 }}
                >
                  <span>🏆</span>
                  <span className="flex-1">View My Cisco & Certifications</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Footer Message */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center text-muted-foreground text-sm mt-8"
            >
              Looking forward to collaborating and creating innovative tech solutions together!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5 bg-black">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Lee Mwenda. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50 font-mono">Built with React, Tailwind & Caffeine</p>
        </div>
      </footer>
    </div>
  );
}
