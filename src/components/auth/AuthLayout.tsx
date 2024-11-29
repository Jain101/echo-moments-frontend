import React from "react";
import { Layout } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const floatingMessages = [
    "I saw you at...",
    "Was it you?",
    "Our eyes met...",
    "You smiled...",
    "Maybe next time...",
    "Was it you on the train?",
    "I remember your face...",
    "You were wearing...",
  ];
  return (
    <Layout className="min-h-screen flex flex-row">
      {/* Left Sidebar with Refined Design */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex-1 bg-gradient-to-br from-indigo-900 via-indigo-700 to-teal-700 p-8 flex flex-col justify-between overflow-hidden"
      >
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#6B7280", stopOpacity: 0.5 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#4B5563", stopOpacity: 0.2 }}
                />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad)" />
          </svg>
        </div>

        {/* Title with Animated Reveal */}
        <motion.div
          className="relative z-10 text-white font-semibold text-4xl text-center mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {"Echoed Moments".split("").map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
          <p className="text-lg text-gray-400 mt-2">
            "Capture fleeting connections"
          </p>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full pointer-events-none opacity-20"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["0%", "-100%"],
              opacity: [0.2, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Quotes */}
        {[...Array(floatingMessages.length)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [-20, -120],
              x: Math.random() * 40 - 20,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
            className="absolute text-white/40 text-lg pointer-events-none shadow-sm"
            style={{
              left: `${Math.random() * 80}%`,
              bottom: "30%",
              transform: `rotate(${Math.random() * 15 - 7.5}deg)`,
            }}
          >
            {floatingMessages[i]}
          </motion.div>
        ))}

        {/* Social Links */}
        <motion.div
          className="relative z-10 flex items-center justify-center space-x-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[
            { Icon: GithubOutlined, href: "https://github.com" },
            { Icon: TwitterOutlined, href: "https://twitter.com" },
            { Icon: LinkedinOutlined, href: "https://linkedin.com" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white opacity-70 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1, y: -1 }}
            >
              <Icon className="text-3xl" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex items-center justify-center p-8 bg-gray-100"
      >
        {children}
      </motion.div>
    </Layout>
  );
};

export default AuthLayout;
