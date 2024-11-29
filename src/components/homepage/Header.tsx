import React, { useState } from "react";
import { Input, Button, Avatar, Dropdown, Badge, Menu } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserOutlined,
  BellOutlined,
  SearchOutlined,
  PlusOutlined,
  SettingOutlined,
  LogoutOutlined,
  HomeOutlined,
  EditOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  notificationCount?: number;
  userName?: string;
  userAvatar?: string;
  setIsCreateModalVisible: (isVisible: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  notificationCount = 0,
  userName = "User",
  userAvatar,
  setIsCreateModalVisible,
}) => {
  const navigate = useNavigate();
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleMenuClick = ({ key }: { key: string }) => {
    switch (key) {
      case "profile":
        navigate("/profile");
        break;
      case "pricings":
        navigate("/pricings");
        break;
      case "settings":
        navigate("/settings");
        break;
      case "logout":
        localStorage.removeItem("authToken");
        navigate("/login");
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<UserOutlined />} className="py-2">
        <span className="ml-2">Profile</span>
      </Menu.Item>
      {/* Pricings with money icon*/}
      <Menu.Item
        key="pricings"
        icon={<DollarCircleOutlined />}
        className="py-2"
      >
        <span className="ml-2">Pricings</span>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />} className="py-2">
        <span className="ml-2">Settings</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        className="py-2 hover:!bg-red-500 hover:!text-white"
      >
        <span className="ml-2">Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="bg-white shadow-lg px-4 py-3 fixed w-full top-0 z-50"
    >
      <div className="max-w-screen mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          {/* <HomeOutlined className="text-2xl text-indigo-600 mr-2" /> */}
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            EchoMoments
          </span>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          animate={{ width: isSearchExpanded ? "50%" : "40%" }}
          transition={{ duration: 0.3 }}
          className="hidden md:block mx-4"
        >
          <Input.Search
            placeholder="Search stories..."
            onFocus={() => setIsSearchExpanded(true)}
            onBlur={() => setIsSearchExpanded(false)}
            className="searchInput"
            prefix={<SearchOutlined className="text-gray-400" />}
            enterButton
          />
        </motion.div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Create Post Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="primary"
              icon={<EditOutlined />}
              className="bg-indigo-600 hover:bg-indigo-700 hidden md:flex items-center"
              // onClick={() => navigate('/create')}
              onClick={() => setIsCreateModalVisible(true)}
            >
              {/* Share your story */}
            </Button>
          </motion.div>

          {/* Notifications */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Badge count={notificationCount} className="cursor-pointer">
              <BellOutlined className="text-xl text-gray-600 p-2" />
            </Badge>
          </motion.div>

          {/* User Menu */}
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <Avatar
                size="large"
                src={userAvatar}
                icon={!userAvatar && <UserOutlined />}
                className="border-2 border-indigo-600"
              />
            </motion.div>
          </Dropdown>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;

/* Add these styles to your CSS file */
