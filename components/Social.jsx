import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiOutlineSparkles } from "react-icons/hi";
import { SiIndeed } from "react-icons/si";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/aryan-munjpara-9b63b2331/" },
  { icon: <FaGithub />, path: "https://github.com/ARYAN2336" },
  { icon: <SiIndeed />, path: "https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-passport--passport-webapp" },
];

const Social = () => (
  <div className="relative group flex gap-6">
    {/* Main Button */}
    <Button
      variant="outline"
      size="icon" // Custom size for perfectly square buttons
      className="w-12 h-12 hidden xl:flex items-center justify-center group-hover:hidden"
    >
      <HiOutlineSparkles className="text-xl" />
    </Button>

    {/* Social Links */}
    <div className="xl:absolute flex gap-4 xl:top-1/2 xl:left-full xl:-translate-y-1/2 xl:opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
      {socials.map((item, index) => (
        <motion.a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 border border-accent rounded-full flex items-center justify-center text-accent text-xl hover:bg-accent hover:text-primary transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.1 * index,
            duration: 0.5,
          }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  </div>
);

export default Social;
