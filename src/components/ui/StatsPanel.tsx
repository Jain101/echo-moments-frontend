// src/components/ui/StatsPanel.tsx

import React from "react";
import { Card, Statistic, Avatar, Divider } from "antd";
import {
  HeartOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const StatsPanel: React.FC = () => {
  return (
    <div className="space-y-4">
      <Card bordered={false} className="shadow-md">
        <Statistic
          title="Total Posts"
          value={158}
          prefix={<FileTextOutlined />}
          valueStyle={{ color: "#3f8600" }}
        />
      </Card>

      <Card bordered={false} className="shadow-md">
        <Statistic
          title="Most Liked Post"
          value="A Chance Meeting at Central Park"
          prefix={<HeartOutlined />}
        />
      </Card>

      <Card bordered={false} className="shadow-md">
        <Statistic
          title="Recent Active Users"
          value="24"
          prefix={<UserOutlined />}
        />
      </Card>

      <Divider>Top Users</Divider>
      <div className="space-y-2">
        <Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=User1"
          size="large"
        />
        <Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=User2"
          size="large"
        />
        <Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=User3"
          size="large"
        />
      </div>
    </div>
  );
};

export default StatsPanel;
