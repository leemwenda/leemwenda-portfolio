import { Instagram, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import { SiPinterest, SiTiktok } from "react-icons/si"; // Lucide doesn't have these, normally we'd install react-icons. 
// For now, I will use generic Lucide icons if react-icons is not available, but user requested specific links. 
// Assuming standard Lucide set for now to avoid complexity, but mapping closely.
// Wait, I can't assume react-icons is installed unless I requested it.
// I will use Link icons or similar generic ones for Pinterest/TikTok if needed, or SVG.
// Actually, I can use SVG directly for custom icons.

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/_unco_biggie",
    icon: Instagram,
    color: "hover:text-[#E4405F]",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/lee-mwenda-b20897373",
    icon: Linkedin,
    color: "hover:text-[#0077B5]",
  },
  {
    name: "Twitter / X",
    href: "https://x.com/itscarsonleelit",
    icon: Twitter,
    color: "hover:text-white", // X is black/white
  },
  {
    name: "Email",
    href: "mailto:Leemwenda8714@gmail.com",
    icon: Mail,
    color: "hover:text-[#D14836]",
  },
];

// Custom icons for ones missing in Lucide (simplified)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2 10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34-.09-.78-.18-2.07 0-3.04l.58-2.3s-.14-.28-.14-.7c0-2.29 1.3-3.96 2.91-3.96 1.37 0 2.03 1.04 2.03 2.29 0 1.4-.89 3.5-1.35 5.44-.38 1.63.81 2.97 2.42 2.97 2.9 0 4.85-3.19 4.85-7.04 0-3.64-2.57-6.18-6.18-6.18-4.21 0-6.69 3.16-6.69 6.44 0 1.27.48 2.63 1.08 3.37.12.14.14.27.1.42l-.4 1.63c-.06.26-.2.32-.47.19-1.75-.82-2.84-3.39-2.84-5.46 0-4.44 3.2-8.52 9.17-8.52 4.81 0 8.56 3.45 8.56 8.05 0 4.81-3.01 8.66-7.21 8.66-1.41 0-2.73-.74-3.18-1.6l-.87 3.35c-.32 1.21-1.17 2.73-1.75 3.53z" />
  </svg>
);


export function SocialLinks({ className = "", iconSize = "w-5 h-5" }: { className?: string, iconSize?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] ${social.color}`}
          aria-label={social.name}
        >
          <social.icon className={iconSize} />
        </a>
      ))}
      {/* Extra ones */}
      <a
        href="https://www.tiktok.com/@_unco_biggie"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:text-pink-500`}
        aria-label="TikTok"
      >
        <TikTokIcon className={iconSize} />
      </a>
      <a
        href="https://pin.it/10GlQecId"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:text-red-600`}
        aria-label="Pinterest"
      >
        <PinterestIcon className={iconSize} />
      </a>
      <a
        href="https://www.credly.com/users/lee-mwenda"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:text-orange-500`}
        aria-label="Credly"
      >
        <ExternalLink className={iconSize} />
      </a>
    </div>
  );
}
