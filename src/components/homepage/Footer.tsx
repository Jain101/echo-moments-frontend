import React from "react";
import { Divider, Space, Tooltip } from "antd";
import { motion } from "framer-motion";
import {
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
  HeartFilled,
  MailOutlined,
  GlobalOutlined,
  TeamOutlined,
  SafetyOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <TwitterOutlined />, label: "Twitter", url: "#" },
    { icon: <InstagramOutlined />, label: "Instagram", url: "#" },
    { icon: <LinkedinOutlined />, label: "LinkedIn", url: "#" },
    { icon: <GithubOutlined />, label: "GitHub", url: "#" },
  ];

  const quickLinks = [
    { icon: <TeamOutlined />, label: "About Us", url: "#" },
    { icon: <MailOutlined />, label: "Contact", url: "#" },
    { icon: <SafetyOutlined />, label: "Privacy Policy", url: "#" },
    { icon: <QuestionCircleOutlined />, label: "FAQ", url: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
              EchoMoments
            </div>
            <p className="text-gray-600 text-sm text-center md:text-left">
              Share your stories, connect with others, and discover amazing
              experiences around the world.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <span className="mr-2">{link.icon}</span>
                  <span className="text-sm">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="font-semibold text-gray-800 mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Tooltip title={social.label}>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                      {social.icon}
                    </div>
                  </Tooltip>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <Divider className="my-6 border-gray-200" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <GlobalOutlined className="mr-2" />
            <span>Available worldwide in 15+ languages</span>
          </div>

          <div className="flex items-center space-x-1">
            <span>© {currentYear} YourBrand. Made with</span>
            <HeartFilled className="text-red-500 mx-1" />
            <span>by Zain</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};