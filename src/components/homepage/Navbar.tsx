import React, { useState } from "react";
import {
  HomeOutlined,
  UserOutlined,
  EditOutlined,
  BarsOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { FloatButton, Button, Space, Tooltip, Segmented } from "antd";
import { VscEdit, VscFeedback, VscHome } from "react-icons/vsc";
import { FaHome } from "react-icons/fa";
import { TabTypes } from "../../types/auth";

interface FloatingTabsProps {
  activeTab: TabTypes;
  setActiveTab: (tab: TabTypes) => void;
}

export const Navbar = ({ setActiveTab, activeTab }: FloatingTabsProps) => {
  const [showPostsCategories, setShowPostsCategories] = useState(false);

  return (
    <div className="fixed left-6 top-24 z-50">
      <Space size="middle" direction="vertical">
        <Tooltip title="Feed" placement="right">
          <Button
            type={activeTab === TabTypes.Feed ? "primary" : "default"}
            icon={<VscHome size={24} />}
            onClick={() => setActiveTab(TabTypes.Feed)}
            // size="large"
            style={{ width: 50, height: 50 }}
            // className="flex items-center shadow-lg hover:-translate-y-0.5 transition-transform duration-200 w-32"
          />
        </Tooltip>
        <Tooltip title="My Posts" placement="right">
          <Button
            type={activeTab === TabTypes.MyPosts ? "primary" : "default"}
            icon={<VscFeedback size={24} />}
            onClick={() => {
              setActiveTab(TabTypes.MyPosts);
              setShowPostsCategories(true);
            }}
            // size="large"
            style={{ width: 50, height: 50 }}
          />
        </Tooltip>
        {/* <Tooltip title="Create Post" placement="right">
          <Button
            type={activeTab === TabTypes.CreatePost ? "primary" : "default"}
            icon={<VscEdit size={24} />}
            onClick={() => {
              setActiveTab(TabTypes.CreatePost);
            }}
            // size="large"
            style={{ width: 50, height: 50 }}
          />
        </Tooltip> */}
      </Space>
      {/* <Segmented
        vertical
        options={[
          {
            value: "List",
            label: (
              // <Tooltip title="Feed" placement="right">
                <Button
                  type={activeTab === TabTypes.Feed ? "primary" : "default"}
                  icon={<HomeOutlined />}
                  onClick={() => setActiveTab(TabTypes.Feed)}
                  // size="large"
                  // className="flex items-center shadow-lg hover:-translate-y-0.5 transition-transform duration-200 w-32"
                />
              // </Tooltip>
            ),
          },
          {
            value: "Kanban",
            label: (
              // <Tooltip title="My Posts" placement="right">
                <Button
                  type={activeTab === TabTypes.MyPosts ? "primary" : "default"}
                  icon={<VscFeedback />}
                  onClick={() => setActiveTab(TabTypes.MyPosts)}
                  // size="large"
                />
              // </Tooltip>
            ),
          },
        ]}
      /> */}
    </div>
  );
};
