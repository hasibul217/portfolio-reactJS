import React from "react";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

// JSON-style array of socials
const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/shanto217",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    url: "https://linkedin.com/in/your-profile",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    url: "https://facebook.com/your-profile",
    label: "Facebook",
  },
  {
    icon: Mail,
    url: "mailto:shantossnic@gmail.com",
    label: "Email",
  },
];

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}
